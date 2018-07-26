const code=`<pre class="prettyprint linenums prettyprinted" data-anchor-id="m142" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Tabs</span><span class="pln"> </span><span class="pun">,</span><span class="typ">Button</span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">TabPane</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Tabs</span><span class="pun">.</span><span class="typ">TabPane</span><span class="pun">;</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">ExtraOperation</span><span class="pun">=(&lt;</span><span class="typ">Button</span><span class="pun">&gt;</span><span class="typ">More</span><span class="pln"> </span><span class="typ">Operation</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;)</span></code></li><li class="L6"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Tabs</span><span class="pln"> defaultActiveKey</span><span class="pun">=</span><span class="str">"1"</span><span class="pln"> tabBarExtraContent</span><span class="pun">={</span><span class="typ">ExtraOperation</span><span class="pun">}&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">TabPane</span><span class="pln"> tab</span><span class="pun">=</span><span class="str">"Tab 1"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"1"</span><span class="pun">&gt;</span><span class="typ">Content</span><span class="pln"> of </span><span class="typ">Tab</span><span class="pln"> </span><span class="typ">Pane</span><span class="pln"> </span><span class="lit">1</span><span class="pun">&lt;/</span><span class="typ">TabPane</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">TabPane</span><span class="pln"> tab</span><span class="pun">=</span><span class="str">"Tab 2"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"2"</span><span class="pun">&gt;</span><span class="typ">Content</span><span class="pln"> of </span><span class="typ">Tab</span><span class="pln"> </span><span class="typ">Pane</span><span class="pln"> </span><span class="lit">2</span><span class="pun">&lt;/</span><span class="typ">TabPane</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">TabPane</span><span class="pln"> tab</span><span class="pun">=</span><span class="str">"Tab 3"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"3"</span><span class="pun">&gt;</span><span class="typ">Content</span><span class="pln"> of </span><span class="typ">Tab</span><span class="pln"> </span><span class="typ">Pane</span><span class="pln"> </span><span class="lit">3</span><span class="pun">&lt;/</span><span class="typ">TabPane</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">Tabs</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">)</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L7"><code><span class="pun">}</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L0"><code></code></li><li class="L1"><code></code></li><li class="L2"><code></code></li><li class="L3"><code></code></li><li class="L4"><code></code></li><li class="L5"><code></code></li></ol></pre>`;

export default{
    code,
}