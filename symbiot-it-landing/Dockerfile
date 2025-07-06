FROM python:latest
LABEL authors="januf"

RUN curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 \
         -o /usr/local/bin/cloudflared
RUN chmod +x /usr/local/bin/cloudflared


COPY cloudfare_config /root/.cloudflared
COPY ../build /app/

WORKDIR /app

CMD cloudflared tunnel run symbiot-tunnel > /dev/null 2>&1 & \
    python -m http.server 80