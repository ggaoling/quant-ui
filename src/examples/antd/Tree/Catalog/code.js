const code=`<pre class="prettyprint linenums prettyprinted" data-anchor-id="ylef" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Tree</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">TreeNode</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Tree</span><span class="pun">.</span><span class="typ">TreeNode</span><span class="pun">;</span></code></li><li class="L5"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">DirectoryTree</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Tree</span><span class="pun">.</span><span class="typ">DirectoryTree</span><span class="pun">;</span></code></li><li class="L6"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L9"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">DirectoryTree</span></code></li><li class="L0"><code><span class="pln">                multiple</span></code></li><li class="L1"><code><span class="pln">                defaultExpandAll</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">TreeNode</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"parent 0"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"0-0"</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">TreeNode</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"leaf 0-0"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"0-0-0"</span><span class="pln"> isLeaf </span><span class="pun">/&gt;</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">TreeNode</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"leaf 0-1"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"0-0-1"</span><span class="pln"> isLeaf </span><span class="pun">/&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">TreeNode</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">TreeNode</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"parent 1"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"0-1"</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">TreeNode</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"leaf 1-0"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"0-1-0"</span><span class="pln"> isLeaf </span><span class="pun">/&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">TreeNode</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"leaf 1-1"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"0-1-1"</span><span class="pln"> isLeaf </span><span class="pun">/&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">TreeNode</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">DirectoryTree</span><span class="pun">&gt;</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">)</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pun">}</span></code></li><li class="L7"><code></code></li><li class="L8"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;
export default{
    code,
}