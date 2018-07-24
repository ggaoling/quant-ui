const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="p0vd"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">TreeSelect</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">TreeNode</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">TreeSelect</span><span class="pun">.</span><span class="typ">TreeNode</span><span class="pun">;</span></code></li><li class="L4"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">    state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">        value</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">undefined</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="pln">    onChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">value</span><span class="pun">);</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln"> value </span><span class="pun">});</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">TreeSelect</span></code></li><li class="L7"><code><span class="pln">                showSearch</span></code></li><li class="L8"><code><span class="pln">                style</span><span class="pun">={{</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">300</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L9"><code><span class="pln">                value</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">value</span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">                dropdownStyle</span><span class="pun">={{</span><span class="pln"> maxHeight</span><span class="pun">:</span><span class="pln"> </span><span class="lit">400</span><span class="pun">,</span><span class="pln"> overflow</span><span class="pun">:</span><span class="pln"> </span><span class="str">'auto'</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L1"><code><span class="pln">                placeholder</span><span class="pun">=</span><span class="str">"Please select"</span></code></li><li class="L2"><code><span class="pln">                allowClear</span></code></li><li class="L3"><code><span class="pln">                multiple</span></code></li><li class="L4"><code><span class="pln">                treeDefaultExpandAll</span></code></li><li class="L5"><code><span class="pln">                onChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onChange</span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">TreeNode</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"parent 1"</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"parent 1"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"0-1"</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">TreeNode</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"parent 1-0"</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"parent 1-0"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"0-1-1"</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">TreeNode</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"leaf1"</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"my leaf"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"random"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L0"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">TreeNode</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"leaf2"</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"your leaf"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"random1"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">TreeNode</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">TreeNode</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"parent 1-1"</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"parent 1-1"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"random2"</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">TreeNode</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"sss"</span><span class="pln"> title</span><span class="pun">={&lt;</span><span class="pln">b style</span><span class="pun">={{</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#08c'</span><span class="pln"> </span><span class="pun">}}&gt;</span><span class="pln">sss</span><span class="pun">&lt;</span><span class="str">/b&gt;} key="random3" /</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">TreeNode</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">TreeNode</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">TreeSelect</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L9"><code><span class="pun">}</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;
export default {
	code,
}