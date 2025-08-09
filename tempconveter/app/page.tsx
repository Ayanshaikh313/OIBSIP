"use client";

import { useState } from 'react';

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const convertFromCelsius = (value: string): void => {
    if (value === '') {
      setFahrenheit('');
      setKelvin('');
      return;
    }
    const c = parseFloat(value);
    if (!isNaN(c)) {
      setFahrenheit(((c * 9/5) + 32).toFixed(2));
      setKelvin((c + 273.15).toFixed(2));
    }
  };

  const convertFromFahrenheit = (value: string): void => {
    if (value === '') {
      setCelsius('');
      setKelvin('');
      return;
    }
    const f = parseFloat(value);
    if (!isNaN(f)) {
      const c = (f - 32) * 5/9;
      setCelsius(c.toFixed(2));
      setKelvin((c + 273.15).toFixed(2));
    }
  };

  const convertFromKelvin = (value: string): void => {
    if (value === '') {
      setCelsius('');
      setFahrenheit('');
      return;
    }
    const k = parseFloat(value);
    if (!isNaN(k)) {
      const c = k - 273.15;
      setCelsius(c.toFixed(2));
      setFahrenheit(((c * 9/5) + 32).toFixed(2));
    }
  };

  const clearAll = () => {
    setCelsius('');
    setFahrenheit('');
    setKelvin('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-2"> Temperature Converter</h1>
          <p className="text-black">Convert between Celsius, Fahrenheit, and Kelvin</p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-medium text-black mb-2">
              Celsius (°C)
            </label>
            <input
              type="number"
              value={celsius}
              onChange={(e) => {
                setCelsius(e.target.value);
                convertFromCelsius(e.target.value);
              }}
              placeholder="Enter temperature in Celsius"
              className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-black mb-2">
              Fahrenheit (°F)
            </label>
            <input
              type="number"
              value={fahrenheit}
              onChange={(e) => {
                setFahrenheit(e.target.value);
                convertFromFahrenheit(e.target.value);
              }}
              placeholder="Enter temperature in Fahrenheit"
              className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-black mb-2">
              Kelvin (K)
            </label>
            <input
              type="number"
              value={kelvin}
              onChange={(e) => {
                setKelvin(e.target.value);
                convertFromKelvin(e.target.value);
              }}
              placeholder="Enter temperature in Kelvin"
              className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
            />
          </div>

          <button
            onClick={clearAll}
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition duration-200 shadow-lg"
          >
            Clear All
          </button>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-semibold text-black mb-2">Quick Reference:</h3>
          <div className="text-xs text-black space-y-1">
            <div>• Water freezes: 0°C = 32°F = 273.15K</div>
            <div>• Water boils: 100°C = 212°F = 373.15K</div>
            <div>• Room temperature: ~20°C = ~68°F = ~293K</div>
          </div>
        </div>
      </div>
    </div>
  );
}