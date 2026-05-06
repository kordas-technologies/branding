@echo off
REM Local HTTP server for the design system.
REM Use this if you want zero-warning rendering (AXIOM canvas pages otherwise log a
REM non-fatal CORS warning when opened directly via file://).
REM
REM After running, open http://localhost:8000/ in a browser.

cd /d "%~dp0"
python -m http.server 8000
