const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="sprv" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Icon</span><span class="pun">,</span><span class="pln"> </span><span class="typ">GlobalFooter</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> links </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[{</span></code></li><li class="L4"><code><span class="pln">    key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'帮助'</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">    title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'帮助'</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">    href</span><span class="pun">:</span><span class="pln"> </span><span class="str">''</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">    key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'github'</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">    title</span><span class="pun">:</span><span class="pln"> </span><span class="pun">&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"github"</span><span class="pln"> </span><span class="pun">/&gt;,</span></code></li><li class="L0"><code><span class="pln">    href</span><span class="pun">:</span><span class="pln"> </span><span class="str">'https://github.com/ant-design/ant-design-pro'</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">    blankTarget</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">    key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'条款'</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">    title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'条款'</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">    href</span><span class="pun">:</span><span class="pln"> </span><span class="str">''</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">    blankTarget</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pun">}];</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="kwd">const</span><span class="pln"> copyright </span><span class="pun">=</span><span class="pln"> </span><span class="str">&lt;div&gt;</span><span class="typ">Copyright</span><span class="pln"> </span><span class="pun">&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"copyright"</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln"> </span><span class="pun">量投科技&lt;/</span><span class="pln">div</span><span class="pun">&gt;;</span></code></li><li class="L0"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> background</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#f5f5f5'</span><span class="pun">,</span><span class="pln"> overflow</span><span class="pun">:</span><span class="pln"> </span><span class="str">'hidden'</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">280</span><span class="pln"> </span><span class="pun">}}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">GlobalFooter</span><span class="pln"> links</span><span class="pun">={</span><span class="pln">links</span><span class="pun">}</span><span class="pln"> copyright</span><span class="pun">={</span><span class="pln">copyright</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pun">}</span></code></li><li class="L1"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>
`;

export default {
	code,
}