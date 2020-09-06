import React, { useState, useEffect } from 'react';
import 'chart.js';

export default function Chart({ id, children: data }) {
  return (
    <div>
      <canvas id={id} width="400" height="400"></canvas>
    </div>
  );
}
