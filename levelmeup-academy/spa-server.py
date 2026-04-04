#!/usr/bin/env python3
"""
Simple HTTP server for SPA (Single Page Application)
All routes are served from index.html for client-side routing
"""
import os
import http.server
import socketserver

PORT = 3003

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Get the requested path
        path = self.translate_path(self.path)
        
        # If file doesn't exist and it's not a static asset, serve index.html
        if not os.path.exists(path) and not self.path.startswith('/static/'):
            self.path = '/index.html'
        
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

if __name__ == '__main__':
    os.chdir('build')
    with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
        print(f"Server running at http://0.0.0.0:{PORT}/")
        httpd.serve_forever()
