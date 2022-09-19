import React from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";

// import ReactDOM from 'react-dom/client';
import './index.css';

// Import of an asset
import webpackLogo from '@/assets/images/webpack-logo.svg'

// Import of styles
import '@/styles/index.scss';

// Tests


// --- Render on the DOM ---
const root = document.getElementById("root");
const view = createRoot(root);
view.render(
  <App />
);


