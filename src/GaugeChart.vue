<template>
  <div :style="chartContainerStyle">
    <div id="chartContainer" class="relative">
      <svg id="gaugeChart" viewBox="-22 -15 250 120">
        <defs>
          <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="rgba(0, 0, 0, 0.2)" />
          </filter>
        </defs>
        <path
          id="gaugeBackground"
          :d="describeArc(100, 100, 75, startAngle, endAngle)"
          fill="none"
          stroke="#E0E0E0"
          stroke-width="14"
          filter="url(#dropShadow)"
        />
        <g id="gaugeSegments">
          <path
            v-for="(segment, index) in segments"
            :key="index"
            :d="segment.d"
            :stroke="index < segmentsToShow ? 'green' : '#CCCCCC'"
            fill="none"
            stroke-width="18"
            class="gauge-segment"
          />
        </g>
        <polygon :points="pointerPoints" fill="green" class="gauge-pointer" />
        <text x="100" y="70" text-anchor="middle" font-family="Space Grotesk" font-weight="bold" font-size="20" fill="green">
          {{ value }}x
        </text>
        <text x="-12" y="100" text-anchor="middle" fill="#000000" font-size="14">{{ minValue }}</text>
        <text x="100" y="-3" text-anchor="middle" fill="#000000" font-size="14">{{ midValue }}</text>
        <text x="214" y="100" text-anchor="middle" fill="#000000" font-size="14">{{ maxValue }}</text>
        <text x="100" y="90" text-anchor="middle" font-size="14">{{ innerLabel }}</text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaugeChart',
  props: {
    value: {
      type: Number,
      required: true,
    },
    minValue: {
      type: Number,
      default: 0,
    },
    midValue: {
      type: Number,
      default: 75,
    },
    maxValue: {
      type: Number,
      default: 150,
    },
    startAngle: {
      type: Number,
      default: 0,
    },
    endAngle: {
      type: Number,
      default: 180,
    },
    chartWidth: {
      type: Number,
      default: 200,
    },
    innerLabel: {
      type: String,
      default: 'Value',
    }
  },
  data() {
    return {
      segments: [],
    };
  },
  computed: {
    segmentsToShow() {
      return Math.floor((this.value / this.maxValue) * 80); // Adjust based on maxValue
    },
    pointerPoints() {
      const pointerAngle = this.calculatePointerAngle(this.value);
      const pointerPos = this.polarToCartesian(100, 100, 83, pointerAngle);
      const pointerBase1 = this.polarToCartesian(100, 100, 70, pointerAngle + 4);
      const pointerBase2 = this.polarToCartesian(100, 100, 70, pointerAngle - 4);
      return `${pointerPos.x},${pointerPos.y} ${pointerBase1.x},${pointerBase1.y} ${pointerBase2.x},${pointerBase2.y}`;
    },
    chartContainerStyle() {
      return {
        width: this.chartWidth+'px',
      };
    },
  },
  methods: {
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      let angleInRadians = (angleInDegrees - 180) * Math.PI / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
      };
    },
    describeArc(x, y, radius, startAngle, endAngle) {
      let start = this.polarToCartesian(x, y, radius, endAngle);
      let end = this.polarToCartesian(x, y, radius, startAngle);
      let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
      let d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ");
      return d;
    },
    createGaugeSegments() {
      const segmentCount = 80; // Total number of segments
      const maxAngle = this.endAngle - this.startAngle; // Total angle for segments
      const segmentGap = 1; // Gap between segments in degrees
      const segmentWidth = (maxAngle - segmentGap * (segmentCount - 1)) / segmentCount;
      const segmentRadius = 92;

      this.segments = []; // Clear previous segments

      for (let i = 0; i < segmentCount; i++) {
        let startAngle = this.startAngle + i * (segmentWidth + segmentGap);
        let endAngle = startAngle + segmentWidth;
        this.segments.push({
          d: this.describeArc(100, 100, segmentRadius, startAngle, endAngle),
        });
      }
    },
    calculatePointerAngle(value) {
      // Calculate the angle for the pointer based on value and angles
      const range = this.endAngle - this.startAngle;
      const normalizedValue = Math.min(Math.max(value, this.minValue), this.maxValue); // Clamp value between min and max
      return this.startAngle + ((normalizedValue - this.minValue) / (this.maxValue - this.minValue)) * range;
    },
    updateGauge() {
      this.createGaugeSegments(); // Recalculate segments when value changes
    },
  },
  mounted() {
    this.createGaugeSegments(); // Initialize gauge segments
  },
  watch: {
    value() {
      this.updateGauge();
    },
    minValue() {
      this.updateGauge();
    },
    midValue() {
      this.updateGauge();
    },
    maxValue() {
      this.updateGauge();
    },
    startAngle() {
      this.updateGauge();
    },
    endAngle() {
      this.updateGauge();
    },
  },
};
</script>

<style scoped>
text {
  font-family: 'Space Grotesk';
  font-size: 10px;
  font-weight: 900;
}

#gaugeContainer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.gauge-pointer {
  transition: transform 0.5s ease-in-out; /* Smooth pointer movement */
  transform-origin: 100px 100px;
}

.gauge-segment {
  transition: stroke 0.5s ease-in-out; /* Smooth color transition for segments */
}
</style>
