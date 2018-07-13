const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="kzo5"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Button</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Icon</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> </span><span class="typ">ButtonGroup</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Button</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">;</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L6"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="str">&lt;h4&gt;</span><span class="typ">Basic</span><span class="pun">&lt;/</span><span class="pln">h4</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">ButtonGroup</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;</span><span class="typ">Cancel</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;</span><span class="pln">OK</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">ButtonGroup</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">ButtonGroup</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> disabled</span><span class="pun">&gt;</span><span class="pln">L</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> disabled</span><span class="pun">&gt;</span><span class="pln">M</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> disabled</span><span class="pun">&gt;</span><span class="pln">R</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">ButtonGroup</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">br </span><span class="pun">/&gt;&lt;</span><span class="pln">br </span><span class="pun">/&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">ButtonGroup</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;</span><span class="pln">L</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;</span><span class="pln">M</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;</span><span class="pln">R</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">ButtonGroup</span><span class="pun">&gt;</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="pln">                </span><span class="str">&lt;h4&gt;</span><span class="typ">With</span><span class="pln"> </span><span class="typ">Icon</span><span class="pun">&lt;/</span><span class="pln">h4</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">ButtonGroup</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"primary"</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"left"</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="typ">Go</span><span class="pln"> back</span></code></li><li class="L9"><code><span class="pln">              </span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"primary"</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                        </span><span class="typ">Go</span><span class="pln"> forward</span><span class="pun">&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"right"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">ButtonGroup</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">ButtonGroup</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"primary"</span><span class="pln"> icon</span><span class="pun">=</span><span class="str">"cloud"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"primary"</span><span class="pln"> icon</span><span class="pun">=</span><span class="str">"cloud-download"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">ButtonGroup</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pun">}</span></code></li><li class="L3"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L4"><code></code></li></ol></pre>
`;

export default {
	code,
}