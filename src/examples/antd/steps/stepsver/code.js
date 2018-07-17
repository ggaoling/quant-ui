const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="bi09"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Steps</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">Step</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Steps</span><span class="pun">.</span><span class="typ">Step</span><span class="pun">;</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L9"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Steps</span><span class="pln"> direction</span><span class="pun">=</span><span class="str">"vertical"</span><span class="pln"> current</span><span class="pun">={</span><span class="lit">1</span><span class="pun">}&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Step</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"Finished"</span><span class="pln"> description</span><span class="pun">=</span><span class="str">"This is a description."</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Step</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"In Progress"</span><span class="pln"> description</span><span class="pun">=</span><span class="str">"This is a description."</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Step</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"Waiting"</span><span class="pln"> description</span><span class="pun">=</span><span class="str">"This is a description."</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">Steps</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pun">}</span></code></li><li class="L7"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;

export default {
	code,
}