const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="55zi" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">ReactMarkdown</span><span class="pln"> </span><span class="pun">,</span><span class="typ">Input</span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">TextArea</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Input</span><span class="pun">;</span></code></li><li class="L3"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">){</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">            value</span><span class="pun">:</span><span class="str">""</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">}</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">    onChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span></code></li><li class="L2"><code><span class="pln">            value</span><span class="pun">:</span><span class="pln">e</span><span class="pun">.</span><span class="pln">target</span><span class="pun">.</span><span class="pln">value</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">})</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L7"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln">marginBottom</span><span class="pun">:</span><span class="str">"20px"</span><span class="pun">}}&gt;</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="str">&lt;h2&gt;</span><span class="pun">请输入</span><span class="typ">Markdown</span><span class="pun">语法&lt;/</span><span class="pln">h2</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">TextArea</span><span class="pln"> onChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onChange</span><span class="pun">}</span><span class="pln"> value</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">value</span><span class="pun">}</span><span class="pln"> placeholder</span><span class="pun">=</span><span class="str">"请输入Markdown语法"</span><span class="pln"> autosize</span><span class="pun">={{</span><span class="pln">minRows</span><span class="pun">:</span><span class="lit">8</span><span class="pun">}}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">ReactMarkdown</span><span class="pln"> source</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">value</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pun">}</span></code></li><li class="L7"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>
`;

export default {
	code,
}