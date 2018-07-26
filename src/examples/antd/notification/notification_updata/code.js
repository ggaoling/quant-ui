const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="paak"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Button</span><span class="pun">,</span><span class="pln"> notification </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> key </span><span class="pun">=</span><span class="pln"> </span><span class="str">'updatable'</span><span class="pun">;</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">const</span><span class="pln"> openNotification </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">    notification</span><span class="pun">.</span><span class="pln">open</span><span class="pun">({</span></code></li><li class="L7"><code><span class="pln">        key</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">        message</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Notification Title'</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">        description</span><span class="pun">:</span><span class="pln"> </span><span class="str">'description.'</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">});</span></code></li><li class="L1"><code><span class="pln">    setTimeout</span><span class="pun">(()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">        notification</span><span class="pun">.</span><span class="pln">open</span><span class="pun">({</span></code></li><li class="L3"><code><span class="pln">            key</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">            message</span><span class="pun">:</span><span class="pln"> </span><span class="str">'New Title'</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">            description</span><span class="pun">:</span><span class="pln"> </span><span class="str">'New description.'</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">},</span><span class="pln"> </span><span class="lit">1000</span><span class="pun">);</span></code></li><li class="L8"><code><span class="pun">};</span></code></li><li class="L9"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L2"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"primary"</span><span class="pln"> onClick</span><span class="pun">={</span><span class="pln">openNotification</span><span class="pun">}&gt;</span><span class="typ">Open</span><span class="pln"> the notification box</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L5"><code><span class="pun">}</span></code></li><li class="L6"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L7"><code></code></li></ol></pre>`;

export default {
	code,
}