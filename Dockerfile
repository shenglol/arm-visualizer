FROM nginx:1.13.7

COPY ./dist /usr/share/nginx/html

RUN echo "`date -u`" > /usr/share/nginx/html/when.txt

EXPOSE 80