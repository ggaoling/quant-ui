const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="0tyf" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Carousel</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">import</span><span class="pln"> </span><span class="str">"./style.less"</span><span class="pun">;</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln">width</span><span class="pun">:</span><span class="lit">800</span><span class="pun">}}&gt;</span><span class="pln"> </span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Carousel</span><span class="pln">  vertical</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="str">&lt;div&gt;&lt;h3&gt;</span><span class="lit">1</span><span class="pun">&lt;</span><span class="str">/h3&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="str">&lt;div&gt;&lt;h3&gt;</span><span class="lit">2</span><span class="pun">&lt;</span><span class="str">/h3&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="str">&lt;div&gt;&lt;h3&gt;</span><span class="lit">3</span><span class="pun">&lt;</span><span class="str">/h3&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="str">&lt;div&gt;&lt;h3&gt;</span><span class="lit">4</span><span class="pun">&lt;</span><span class="str">/h3&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Carousel</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pun">}</span></code></li><li class="L9"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L0"><code><span class="pun">----------------------------------------------------------------------------------------------</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="com">//style.less</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="pun">.</span><span class="pln">ant</span><span class="pun">-</span><span class="pln">carousel </span><span class="pun">.</span><span class="pln">slick</span><span class="pun">-</span><span class="pln">slide </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">    text</span><span class="pun">-</span><span class="pln">align</span><span class="pun">:</span><span class="pln"> center</span><span class="pun">;</span></code></li><li class="L6"><code><span class="pln">    height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">160px</span><span class="pun">;</span></code></li><li class="L7"><code><span class="pln">    line</span><span class="pun">-</span><span class="pln">height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">160px</span><span class="pun">;</span></code></li><li class="L8"><code><span class="pln">    background</span><span class="pun">:</span><span class="pln"> </span><span class="com">#364d79;</span></code></li><li class="L9"><code><span class="pln">    overflow</span><span class="pun">:</span><span class="pln"> hidden</span><span class="pun">;</span></code></li><li class="L0"><code><span class="pln">  </span><span class="pun">}</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="pln">  </span><span class="pun">.</span><span class="pln">ant</span><span class="pun">-</span><span class="pln">carousel </span><span class="pun">.</span><span class="pln">slick</span><span class="pun">-</span><span class="pln">slide h3 </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">    color</span><span class="pun">:</span><span class="pln"> </span><span class="com">#fff;</span></code></li><li class="L4"><code><span class="pln">  </span><span class="pun">}</span></code></li></ol></pre>`;

export default {
	code,
}