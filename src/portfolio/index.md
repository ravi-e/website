---
title: Documentation Showcase
layout: base.njk
---

<div style="margin-bottom: 2rem;">
  <span class="editorial-kicker">Showcase</span>
  <h1 style="font-family: var(--font-sans); font-size: 2.5rem; font-weight: 800; letter-spacing: -0.03em; line-height: 1.1;">Writing &amp; Documentation Samples</h1>
  <p class="editorial-support" style="margin-top: 0.5rem; font-size: 1.1rem;">
    Explore interactive samples of API references, CLI usage guides, and troubleshooting documentation.
  </p>
</div>

<div class="showcase-container">
  <div class="showcase-sidebar">
    <button class="showcase-tab-btn active" data-target="overview">Overview</button>
    <button class="showcase-tab-btn" data-target="getting-started">1. Onboarding</button>
    <button class="showcase-tab-btn" data-target="cli-reference">2. CLI Reference</button>
    <button class="showcase-tab-btn" data-target="api-reference">3. API Reference</button>
    <button class="showcase-tab-btn" data-target="troubleshooting">4. Troubleshooting</button>
  </div>

  <div class="showcase-content-area">
    <!-- OVERVIEW PANE -->
    <div id="overview" class="showcase-pane active prose">
      <h2>Showcase Overview</h2>
      <p>
        These samples demonstrate my ability to structure, format, and present complex developer resources using Docs-as-Code principles. The content covers end-to-end documentation patterns for a connected vehicle ecosystem.
      </p>

      <h3>Documentation Stack</h3>
      <p>Technologies I use to design, build, and maintain scalable documentation systems:</p>
      
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Tools &amp; Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Docs-as-Code &amp; Developer Tooling</strong></td>
            <td>Eleventy, MkDocs (static sites), Markdown, Git (version control)</td>
          </tr>
          <tr>
            <td><strong>Structured Authoring &amp; Publishing</strong></td>
            <td>DITA XML, MadCap Flare, Oxygen XML Author</td>
          </tr>
          <tr>
            <td><strong>API &amp; Developer Documentation</strong></td>
            <td>REST API documentation, JSON, CLI-based workflows</td>
          </tr>
          <tr>
            <td><strong>Collaboration &amp; Workflow</strong></td>
            <td>JIRA, Confluence, Agile Methodologies</td>
          </tr>
        </tbody>
      </table>

      <h3>Key Writing Skills Demonstrated</h3>
      <ul>
        <li><strong>Structural modulatory:</strong> Creating clear, step-by-step procedures.</li>
        <li><strong>Command-line clarity:</strong> Mapping options, argument dependencies, and outputs.</li>
        <li><strong>API parameter mapping:</strong> Displaying path and query parameters with matching request/response models.</li>
        <li><strong>Actionable troubleshooting:</strong> Creating symptom-to-cause mappings to reduce support times.</li>
      </ul>
      
      <p style="margin-top: 2rem;">
        <em>Select a sample from the sidebar to view the technical content.</em>
      </p>
    </div>

    <!-- ONBOARDING PANE -->
    <div id="getting-started" class="showcase-pane prose">
      <div class="callout-box">
        <div class="callout-title">About this Sample</div>
        <p><strong>Goal:</strong> Onboard developers to a connected vehicle ecosystem.</p>
        <p><strong>Key Skills:</strong> Hardware-software prerequisites, CLI installation, and API-driven telemetry access.</p>
      </div>

      <h2>Getting Started (Connected EV Platform)</h2>
      <p>Welcome to the developer portal. This guide will help you connect your local environment to your scooter’s onboard computer (Dashboard) to start pulling telemetry data.</p>
      <p>The Command Line Interface (CLI) acts as a bridge between your local machine and the Smart Vehicle Platform API.</p>

      <pre><code>CLI → API Layer → Vehicle Cloud → Scooter</code></pre>

      <ul>
        <li>The CLI sends requests to the Smart Vehicle Platform API.</li>
        <li>The API retrieves data from the vehicle cloud.</li>
        <li>The scooter streams telemetry back to your application.</li>
      </ul>

      <hr>

      <h3>Prerequisites</h3>
      <p>Before you begin, ensure you have the following:</p>
      <ul>
        <li><strong>Hardware:</strong> Ather Gen 3 vehicle with an active Connect Pro subscription.</li>
        <li><strong>Software:</strong> Node.js v18.0 or higher.</li>
      </ul>

      <hr>

      <h3>1. Install the CLI</h3>
      <p>The CLI is the primary tool for interacting with the platform. Install it globally using <code>npm</code>:</p>
      <pre><code>npm install -g @ather/rizta-cli</code></pre>

      <h3>2. Authenticate your scooter</h3>
      <p>To securely access your vehicle data, you must pair your scooter using its VIN (Vehicle Identification Number).</p>
      <ol>
        <li>Run the following command in your terminal:
          <pre><code>rizta auth --pair</code></pre>
        </li>
        <li>When prompted for your "Riding Profile," select your preferred mode:
          <ul>
            <li><code>Eco</code>: Max range, minimum API polling.</li>
            <li><code>Zip</code>: Balanced performance.</li>
            <li><code>Warp</code>: High-frequency data streaming.</li>
          </ul>
        </li>
      </ol>

      <h3>3. Make your first API call</h3>
      <p>Verify your setup by retrieving battery and range information.</p>
      <p><strong>Example Request</strong></p>
      <pre><code>rizta status --vehicle-id "rizta_001"</code></pre>
      <p><strong>Example Response</strong></p>
      <pre><code>{
  "vehicle": "Rizta_Z_Limited",
  "location": "Mumbai_West",
  "soc": 88,
  "range_km": 112,
  "status": "ready",
  "easter_egg": "bike_of_scooters"
}</code></pre>
    </div>

    <!-- CLI PANE -->
    <div id="cli-reference" class="showcase-pane prose">
      <div class="callout-box">
        <div class="callout-title">About this Sample</div>
        <p><strong>Goal:</strong> Provide a command-level reference for interacting with the platform CLI.</p>
        <p><strong>Key Skills:</strong> CLI documentation structure, command syntax design, parameter clarity, and mapping CLI actions to API behavior.</p>
      </div>

      <h2>CLI Command Reference</h2>
      <p>The command-line interface allows developers to interact with the Smart Vehicle Platform directly from the terminal.</p>

      <h3>Command Structure</h3>
      <pre><code>rizta &lt;command&gt; [options]</code></pre>

      <h3>Global Options</h3>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--help</code></td>
            <td>Displays help for a command</td>
          </tr>
          <tr>
            <td><code>--version</code></td>
            <td>Shows CLI version</td>
          </tr>
          <tr>
            <td><code>--output json</code></td>
            <td>Formats output as JSON</td>
          </tr>
        </tbody>
      </table>

      <hr>

      <h3>Pair a vehicle</h3>
      <pre><code>rizta auth --pair</code></pre>
      <p>Pairs your local CLI with a scooter using VIN-based authentication.</p>
      
      <h4>Options</h4>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--vin</code></td>
            <td>Yes</td>
            <td>Vehicle Identification Number</td>
          </tr>
          <tr>
            <td><code>--profile</code></td>
            <td>No</td>
            <td>Riding profile (<code>eco</code>, <code>zip</code>, <code>warp</code>)</td>
          </tr>
        </tbody>
      </table>

      <h4>Example</h4>
      <pre><code>rizta auth --pair --vin "RIZTA123456" --profile warp</code></pre>

      <hr>

      <h3>Get vehicle status</h3>
      <pre><code>rizta status --vehicle-id &lt;id&gt;</code></pre>
      <p>Retrieves real-time vehicle telemetry including battery, range, and operational state.</p>

      <h4>Example</h4>
      <pre><code>rizta status --vehicle-id "rizta_001"</code></pre>
      <h4>Response</h4>
      <pre><code>{
  "soc": 88,
  "range_km": 112,
  "status": "ready"
}</code></pre>
    </div>

    <!-- API PANE -->
    <div id="api-reference" class="showcase-pane prose">
      <div class="callout-box">
        <div class="callout-title">About this Sample</div>
        <p><strong>Context:</strong> Demonstrates documentation for a RESTful resource.</p>
        <p><strong>Key Skills:</strong> Structured parameter tables, JSON syntax highlighting, and standard HTTP error mapping.</p>
      </div>

      <h2>REST API Reference</h2>
      <p>Base URL: <code>https://api.smartvehicle.com/v1</code></p>
      <p>All requests require authentication using a Bearer token in the request header:</p>
      <pre><code>Authorization: Bearer &lt;access_token&gt;</code></pre>

      <hr>

      <h3>Get Product Details</h3>
      <p><code>GET /v1/products/{product_id}</code></p>
      <p>Retrieves metadata for a specific inventory item, including real-time stock levels across warehouse locations.</p>

      <h4>Path Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>product_id</code></td>
            <td>string</td>
            <td><strong>Yes</strong></td>
            <td>The unique identifier of the product.</td>
          </tr>
        </tbody>
      </table>

      <h4>Query Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>include_location</code></td>
            <td>boolean</td>
            <td><code>false</code></td>
            <td>If true, returns a breakdown of stock by warehouse ID.</td>
          </tr>
        </tbody>
      </table>

      <h4>200 OK Response Example</h4>
      <pre><code>{
  "id": "rizta_pwr_unit",
  "sku": "ATHR-GEN3-MUM",
  "name": "PMSM Traction Motor Cog",
  "total_stock": 350,
  "status": "warp_mode_active",
  "last_updated": "2026-03-28T10:00:00Z"
}</code></pre>
    </div>

    <!-- TROUBLESHOOTING PANE -->
    <div id="troubleshooting" class="showcase-pane prose">
      <div class="callout-box">
        <div class="callout-title">About this Sample</div>
        <p><strong>Goal:</strong> Help developers quickly diagnose and resolve common setup issues.</p>
        <p><strong>Key Skills:</strong> Error-driven documentation, actionable resolutions, and mapping failures to system components.</p>
      </div>

      <h2>Diagnostic Troubleshooting Guide</h2>
      <p>Identify and resolve common issues when connecting to and interacting with your vehicle telemetry systems.</p>

      <h3>Common Issues</h3>
      <table>
        <thead>
          <tr>
            <th>Issue</th>
            <th>Possible Cause</th>
            <th>Resolution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CLI command not found</td>
            <td>CLI not installed or not in PATH</td>
            <td>Reinstall using <code>npm install -g @ather/rizta-cli</code> and restart terminal.</td>
          </tr>
          <tr>
            <td>Authentication fails (<code>authentication_failed</code>)</td>
            <td>Expired or invalid session</td>
            <td>Re-run authentication sequence: <code>rizta auth --pair</code>.</td>
          </tr>
          <tr>
            <td>Vehicle not found (<code>vehicle_not_found</code>)</td>
            <td>Incorrect vehicle ID or VIN not paired</td>
            <td>Verify vehicle registration values and ensure active pairing.</td>
          </tr>
          <tr>
            <td>Rate limit exceeded (<code>rate_limited</code>)</td>
            <td>Too many requests in short time</td>
            <td>Reduce polling request frequency in your application.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.showcase-tab-btn');
    const panes = document.querySelectorAll('.showcase-pane');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        buttons.forEach(b => b.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));

        // Add active class to clicked button and its corresponding pane
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  });
</script>