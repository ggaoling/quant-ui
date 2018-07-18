const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="7nc6"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">DatePicker</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">RangePicker</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">DatePicker</span><span class="pun">;</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">function</span><span class="pln"> onChange</span><span class="pun">(</span><span class="pln">value</span><span class="pun">,</span><span class="pln"> dateString</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'Selected Time: '</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">);</span></code></li><li class="L7"><code><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'Formatted Selected Time: '</span><span class="pun">,</span><span class="pln"> dateString</span><span class="pun">);</span></code></li><li class="L8"><code><span class="pun">}</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="kwd">function</span><span class="pln"> onOk</span><span class="pun">(</span><span class="pln">value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'onOk: '</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">);</span></code></li><li class="L2"><code><span class="pun">}</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L7"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">DatePicker</span></code></li><li class="L9"><code><span class="pln">                    showTime</span></code></li><li class="L0"><code><span class="pln">                    format</span><span class="pun">=</span><span class="str">"YYYY-MM-DD HH:mm:ss"</span></code></li><li class="L1"><code><span class="pln">                    placeholder</span><span class="pun">=</span><span class="str">"Select Time"</span></code></li><li class="L2"><code><span class="pln">                    onChange</span><span class="pun">={</span><span class="pln">onChange</span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">                    onOk</span><span class="pun">={</span><span class="pln">onOk</span><span class="pun">}</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">/&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">br </span><span class="pun">/&gt;&lt;</span><span class="pln">br </span><span class="pun">/&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">RangePicker</span></code></li><li class="L7"><code><span class="pln">                    showTime</span><span class="pun">={{</span><span class="pln"> format</span><span class="pun">:</span><span class="pln"> </span><span class="str">'HH:mm'</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L8"><code><span class="pln">                    format</span><span class="pun">=</span><span class="str">"YYYY-MM-DD HH:mm"</span></code></li><li class="L9"><code><span class="pln">                    placeholder</span><span class="pun">={[</span><span class="str">'Start Time'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'End Time'</span><span class="pun">]}</span></code></li><li class="L0"><code><span class="pln">                    onChange</span><span class="pun">={</span><span class="pln">onChange</span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">                    onOk</span><span class="pun">={</span><span class="pln">onOk</span><span class="pun">}</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">/&gt;</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pun">}</span></code></li><li class="L7"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;

export default {
	code,
}