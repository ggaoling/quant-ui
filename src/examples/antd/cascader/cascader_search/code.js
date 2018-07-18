const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="7nc6"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Cascader</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> options </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[{</span></code></li><li class="L4"><code><span class="pln">    value</span><span class="pun">:</span><span class="pln"> </span><span class="str">'zhejiang'</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">    label</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Zhejiang'</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">    children</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[{</span></code></li><li class="L7"><code><span class="pln">        value</span><span class="pun">:</span><span class="pln"> </span><span class="str">'hangzhou'</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">        label</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Hangzhou'</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">        children</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[{</span></code></li><li class="L0"><code><span class="pln">            value</span><span class="pun">:</span><span class="pln"> </span><span class="str">'xihu'</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">            label</span><span class="pun">:</span><span class="pln"> </span><span class="str">'West Lake'</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">        </span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">            value</span><span class="pun">:</span><span class="pln"> </span><span class="str">'xiasha'</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">            label</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Xia Sha'</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">            disabled</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">}],</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}],</span></code></li><li class="L8"><code><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">    value</span><span class="pun">:</span><span class="pln"> </span><span class="str">'jiangsu'</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">    label</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Jiangsu'</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">    children</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[{</span></code></li><li class="L2"><code><span class="pln">        value</span><span class="pun">:</span><span class="pln"> </span><span class="str">'nanjing'</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">        label</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Nanjing'</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">        children</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[{</span></code></li><li class="L5"><code><span class="pln">            value</span><span class="pun">:</span><span class="pln"> </span><span class="str">'zhonghuamen'</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">            label</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Zhong Hua men'</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">}],</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">}],</span></code></li><li class="L9"><code><span class="pun">}];</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="kwd">function</span><span class="pln"> onChange</span><span class="pun">(</span><span class="pln">value</span><span class="pun">,</span><span class="pln"> selectedOptions</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">value</span><span class="pun">,</span><span class="pln"> selectedOptions</span><span class="pun">);</span></code></li><li class="L3"><code><span class="pun">}</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">function</span><span class="pln"> filter</span><span class="pun">(</span><span class="pln">inputValue</span><span class="pun">,</span><span class="pln"> path</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">path</span><span class="pun">.</span><span class="pln">some</span><span class="pun">(</span><span class="pln">option </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">(</span><span class="pln">option</span><span class="pun">.</span><span class="pln">label</span><span class="pun">).</span><span class="pln">toLowerCase</span><span class="pun">().</span><span class="pln">indexOf</span><span class="pun">(</span><span class="pln">inputValue</span><span class="pun">.</span><span class="pln">toLowerCase</span><span class="pun">())</span><span class="pln"> </span><span class="pun">&gt;</span><span class="pln"> </span><span class="pun">-</span><span class="lit">1</span><span class="pun">));</span></code></li><li class="L7"><code><span class="pun">}</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L2"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Cascader</span></code></li><li class="L3"><code><span class="pln">                options</span><span class="pun">={</span><span class="pln">options</span><span class="pun">}</span></code></li><li class="L4"><code><span class="pln">                onChange</span><span class="pun">={</span><span class="pln">onChange</span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">                placeholder</span><span class="pun">=</span><span class="str">"Please select"</span></code></li><li class="L6"><code><span class="pln">                showSearch</span><span class="pun">={{</span><span class="pln"> filter </span><span class="pun">}}</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">/&gt;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pun">}</span></code></li><li class="L1"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;

export default {
	code,
}