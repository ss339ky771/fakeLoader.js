<h1>What is simpleBlackLoader.js</h1>
<p>
simpleBlackLoader.js is a lightweight jQuery plugin that helps you create an animated spinner with a fullscreen loading mask to simulate the page preloading effect.
</p>
<h1>1. Include in HTML Document</h1>
<p style="margin:0px;">Include in the top of your &lt;body&gt; tag </p>
<pre><p>&lt;div id="simpleBlackLoader"&gt;&lt;/div&gt;</p></pre>
</br></br>
<h1>2. Include Styles</h1>
<p>Inside &lt;head&gt; tag </p>
<pre><p>&lt;link rel="stylesheet" href="yourPath/simpleBlackLoader.css"&gt;</p></pre>
<h1>3. Include Folowing Libraries</h1>
<p>JQuery reference and the simpleBlackLoader.js</p>
<pre>
<p>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"&gt;</p><p>&lt;script src="yourPath/simpleBlackLoader.min.js"&gt;</p>
</pre>

<h1>4. Basic Initialize</h1>
<p>Include in bottom of your  &lt;body&gt; tag</p>
<pre>
<code>
    &lt;script type="text/javascript"&gt;
        $("#simpleBlackLoader").simpleBlackLoader();
    &lt;/script&gt;
</code>
</pre>

<h1>5. Options</h1>
<pre>
<code><p>&lt;script type="text/javascript"&gt;</p>
    $("#simpleBlackLoader").simpleBlackLoader({

            timeToHide:1200, //Time in milliseconds for simpleBlackLoader disappear
            zIndex:999, // Default zIndex
            bgColor:"#2ecc71", //Hex, RGB or RGBA colors
    });
     &lt;/script&gt;
</code>
</pre>

