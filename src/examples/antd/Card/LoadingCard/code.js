const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="0tyf" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Card</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">    state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">        loading</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">    handleClick </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln"> loading</span><span class="pun">:</span><span class="pln"> </span><span class="pun">!</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">loading </span><span class="pun">});</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L3"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Card</span><span class="pln">  loading</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">loading</span><span class="pun">}</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"Card title"</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln">width</span><span class="pun">:</span><span class="lit">400</span><span class="pun">}}&gt;</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="typ">Whatever</span><span class="pln"> content</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Card</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleClick</span><span class="pun">}</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln"> marginTop</span><span class="pun">:</span><span class="pln"> </span><span class="lit">16</span><span class="pln"> </span><span class="pun">}}&gt;</span><span class="typ">Toggle</span><span class="pln"> loading</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L1"><code><span class="pun">}</span></code></li><li class="L2"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;

export default {
	code,
}