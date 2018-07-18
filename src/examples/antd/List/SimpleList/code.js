const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="0tyf" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">List</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">const</span><span class="pln"> data </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L5"><code><span class="pln">    </span><span class="str">'dog,dog,dog'</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">    </span><span class="str">'cat,cat,cat'</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">    </span><span class="str">'flamingo,flamingo,flamingo'</span></code></li><li class="L8"><code><span class="pun">]</span></code></li><li class="L9"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln"> div </span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">h3 style</span><span class="pun">={{</span><span class="pln"> marginBottom</span><span class="pun">:</span><span class="pln"> </span><span class="lit">16</span><span class="pln"> </span><span class="pun">}}&gt;</span><span class="typ">Default</span><span class="pln"> </span><span class="typ">Size</span><span class="pun">&lt;/</span><span class="pln">h3</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">List</span></code></li><li class="L6"><code><span class="pln">                    header</span><span class="pun">={&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="typ">Header</span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;}</span></code></li><li class="L7"><code><span class="pln">                    footer</span><span class="pun">={&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="typ">Footer</span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;}</span></code></li><li class="L8"><code><span class="pln">                    bordered</span></code></li><li class="L9"><code><span class="pln">                    dataSource</span><span class="pun">={</span><span class="pln">data</span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">                    renderItem</span><span class="pun">={</span><span class="pln">item </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">(&lt;</span><span class="typ">List</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;{</span><span class="pln">item</span><span class="pun">}&lt;/</span><span class="typ">List</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;)}</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">/&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">h3 style</span><span class="pun">={{</span><span class="pln"> margin</span><span class="pun">:</span><span class="pln"> </span><span class="str">'16px 0'</span><span class="pln"> </span><span class="pun">}}&gt;</span><span class="typ">Small</span><span class="pln"> </span><span class="typ">Size</span><span class="pun">&lt;/</span><span class="pln">h3</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">List</span></code></li><li class="L4"><code><span class="pln">                    size</span><span class="pun">=</span><span class="str">"small"</span></code></li><li class="L5"><code><span class="pln">                    header</span><span class="pun">={&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="typ">Header</span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;}</span></code></li><li class="L6"><code><span class="pln">                    footer</span><span class="pun">={&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="typ">Footer</span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;}</span></code></li><li class="L7"><code><span class="pln">                    bordered</span></code></li><li class="L8"><code><span class="pln">                    dataSource</span><span class="pun">={</span><span class="pln">data</span><span class="pun">}</span></code></li><li class="L9"><code><span class="pln">                    renderItem</span><span class="pun">={</span><span class="pln">item </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">(&lt;</span><span class="typ">List</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;{</span><span class="pln">item</span><span class="pun">}&lt;/</span><span class="typ">List</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;)}</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">/&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">h3 style</span><span class="pun">={{</span><span class="pln"> margin</span><span class="pun">:</span><span class="pln"> </span><span class="str">'16px 0'</span><span class="pln"> </span><span class="pun">}}&gt;</span><span class="typ">Large</span><span class="pln"> </span><span class="typ">Size</span><span class="pun">&lt;/</span><span class="pln">h3</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">List</span></code></li><li class="L3"><code><span class="pln">                    size</span><span class="pun">=</span><span class="str">"large"</span></code></li><li class="L4"><code><span class="pln">                    header</span><span class="pun">={&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="typ">Header</span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;}</span></code></li><li class="L5"><code><span class="pln">                    footer</span><span class="pun">={&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="typ">Footer</span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;}</span></code></li><li class="L6"><code><span class="pln">                    bordered</span></code></li><li class="L7"><code><span class="pln">                    dataSource</span><span class="pun">={</span><span class="pln">data</span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">                    renderItem</span><span class="pun">={</span><span class="pln">item </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">(&lt;</span><span class="typ">List</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;{</span><span class="pln">item</span><span class="pun">}&lt;/</span><span class="typ">List</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;)}</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">/&gt;</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div </span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L3"><code><span class="pun">}</span></code></li><li class="L4"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;
export default {
	code,
}