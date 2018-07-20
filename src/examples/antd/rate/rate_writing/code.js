const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="43ny"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Rate</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        value</span><span class="pun">:</span><span class="pln"> </span><span class="lit">3</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L7"><code></code></li><li class="L8"><code><span class="pln">    handleChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln"> value </span><span class="pun">});</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> value </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">;</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L5"><code><span class="pln">            </span><span class="str">&lt;span&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Rate</span><span class="pln"> onChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleChange</span><span class="pun">}</span><span class="pln"> value</span><span class="pun">={</span><span class="pln">value</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">{</span><span class="pln">value </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">&lt;</span><span class="pln">span className</span><span class="pun">=</span><span class="str">"ant-rate-text"</span><span class="pun">&gt;{</span><span class="pln">value</span><span class="pun">}</span><span class="pln"> stars</span><span class="pun">&lt;/</span><span class="pln">span</span><span class="pun">&gt;}</span></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L1"><code><span class="pun">}</span></code></li><li class="L2"><code></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;
export default {
	code,
}