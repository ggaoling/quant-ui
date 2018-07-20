const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="bzau"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">InputNumber</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">import</span><span class="pln"> </span><span class="str">'./style.less'</span><span class="pun">;</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">function</span><span class="pln"> onChange</span><span class="pun">(</span><span class="pln">value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'changed'</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">);</span></code></li><li class="L6"><code><span class="pun">}</span></code></li><li class="L7"><code></code></li><li class="L8"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L2"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">InputNumber</span><span class="pln"> size</span><span class="pun">=</span><span class="str">"large"</span><span class="pln"> min</span><span class="pun">={</span><span class="lit">1</span><span class="pun">}</span><span class="pln"> max</span><span class="pun">={</span><span class="lit">100000</span><span class="pun">}</span><span class="pln"> defaultValue</span><span class="pun">={</span><span class="lit">3</span><span class="pun">}</span><span class="pln"> onChange</span><span class="pun">={</span><span class="pln">onChange</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">InputNumber</span><span class="pln"> min</span><span class="pun">={</span><span class="lit">1</span><span class="pun">}</span><span class="pln"> max</span><span class="pun">={</span><span class="lit">100000</span><span class="pun">}</span><span class="pln"> defaultValue</span><span class="pun">={</span><span class="lit">3</span><span class="pun">}</span><span class="pln"> onChange</span><span class="pun">={</span><span class="pln">onChange</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">InputNumber</span><span class="pln"> size</span><span class="pun">=</span><span class="str">"small"</span><span class="pln"> min</span><span class="pun">={</span><span class="lit">1</span><span class="pun">}</span><span class="pln"> max</span><span class="pun">={</span><span class="lit">100000</span><span class="pun">}</span><span class="pln"> defaultValue</span><span class="pun">={</span><span class="lit">3</span><span class="pun">}</span><span class="pln"> onChange</span><span class="pun">={</span><span class="pln">onChange</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">  </span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L9"><code><span class="pun">}</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="pun">.</span><span class="pln">ant</span><span class="pun">-</span><span class="pln">input</span><span class="pun">-</span><span class="pln">number </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">    margin</span><span class="pun">-</span><span class="pln">right</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10px</span><span class="pun">;</span></code></li><li class="L7"><code><span class="pun">}</span></code></li></ol></pre>`;
export default {
	code,
}