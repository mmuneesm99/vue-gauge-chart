﻿# Vue Gauge Chart

![npm](https://img.shields.io/npm/v/vue-gauge-chart)
![license](https://img.shields.io/npm/l/vue-gauge-chart)
![downloads](https://img.shields.io/npm/dw/vue-gauge-chart)
![Vue.js](https://img.shields.io/badge/Vue-2.x-green)
![Vue.js](https://img.shields.io/badge/Vue-3.x-green)

A Vue.js component for creating interactive gauge charts. This component allows you to visualize values in a circular format, making it ideal for dashboards and data visualization.

## Features

- Customizable gauge ranges
- Dynamic value updates
- Smooth animations for pointer movement and segment transitions
- Easy integration with Vue.js applications

## Installation

To install the Vue Gauge Chart component, use npm:

```bash
npm install vue-gauge-chart
```

Usage
Basic Usage
First, import the component into your Vue application:

```js
import Vue from 'vue';
import GaugeChart from 'vue-gauge-chart';

Vue.component('gauge-chart', GaugeChart);
```
Example
You can use the component in your Vue templates as follows:
```vue
<template>
  <div id="app">
    <gauge-chart 
      :value="75" 
      :minValue="0" 
      :midValue="75" 
      :maxValue="150" 
      :startAngle="0" 
      :endAngle="180" 
      :chartWidth="200" 
      innerLabel="Performance" 
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Dynamic data can be set here
    };
  }
};
</script>
```
Props
The GaugeChart component accepts the following props:

| Prop        | Type     | Default | Description                                            |
|-------------|----------|---------|--------------------------------------------------------|
| `value`     | Number   | Required| The current value to display on the gauge.             |
| `minValue`  | Number   | 0       | The minimum value of the gauge.                        |
| `midValue`  | Number   | 75      | The midpoint value of the gauge.                       |
| `maxValue`  | Number   | 150     | The maximum value of the gauge.                        |
| `startAngle`| Number   | 0       | The starting angle of the gauge in degrees.            |
| `endAngle`  | Number   | 180     | The ending angle of the gauge in degrees.              |
| `chartWidth`| Number   | 200     | The width of the chart in pixels.                      |
| `innerLabel`| String   | "Value" | The label displayed inside the gauge.                  |

Customization
You can customize the appearance of the gauge by modifying the component’s CSS. The default styles are located in the <style scoped> section of the GaugeChart.vue file.

Example CSS Customization
```css
.gauge-pointer {
  transition: transform 0.5s ease-in-out; /* Smooth pointer movement */
  transform-origin: 100px 100px; /* Origin for rotation */
}

.gauge-segment {
  transition: stroke 0.5s ease-in-out; /* Smooth color transition for segments */
}
```
Development
Running Locally
To run the component locally for development:

1. Clone the repository:
```bash
git clone https://github.com/mmuneesm99/vue-gauge-chart.git
cd vue-gauge-chart
```

2. Install the dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```

4. Building for Production

To build the component for production:
```bash
npm run build
```
This will create a dist folder containing the production-ready files.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Author : 
[Muhammed Munees]('https://munees.co.in')


### Notes
- Replace `https://github.com/mmuneesm99/vue-gauge-chart.git` with your actual repository URL.
- Update the link in the "Author" section with your personal or professional website.
- Adjust or expand on any sections based on additional features or changes in your component.
