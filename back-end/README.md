# How to get this working
## By Sam

1. Open terminal and cd to a good location to download this file, Desktop, etc.

2. In the terminal, do
~~~bash
git clone -b backend https://github.com/hcp-uw/music-personality-test.git
~~~

3. Open VS Code and open __music-personality-test__ folder with _open_folder_ option.

4. Open VS Code terminal by doing [Ctrl] + [Shift] + [P] and typing  _Debug: JavaScript Debug Terminal_.

5. Try and see if this works.
~~~
nodemon start
~~~
If it does, go look at app.js and try to get familiar with the concepts I wrote inside.

6. If step 5 doesn't work do this.
~~~bash
npm install nodemon
~~~
and
~~~bash
npm install express
~~~
