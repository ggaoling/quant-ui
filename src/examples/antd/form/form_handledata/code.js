const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="7nc6"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Form</span><span class="pun">,</span><span class="pln"> </span><span class="typ">InputNumber</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">FormItem</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Form</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">;</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">function</span><span class="pln"> validatePrimeNumber</span><span class="pun">(</span><span class="pln">number</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">number </span><span class="pun">===</span><span class="pln"> </span><span class="lit">11</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">            validateStatus</span><span class="pun">:</span><span class="pln"> </span><span class="str">'success'</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">            errorMsg</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">};</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">        validateStatus</span><span class="pun">:</span><span class="pln"> </span><span class="str">'error'</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">        errorMsg</span><span class="pun">:</span><span class="pln"> </span><span class="str">'The prime between 8 and 12 is 11!'</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">};</span></code></li><li class="L5"><code><span class="pun">}</span></code></li><li class="L6"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">    state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        number</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">            value</span><span class="pun">:</span><span class="pln"> </span><span class="lit">11</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">},</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">};</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="pln">    handleNumberChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span></code></li><li class="L5"><code><span class="pln">            number</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">...</span><span class="pln">validatePrimeNumber</span><span class="pun">(</span><span class="pln">value</span><span class="pun">),</span></code></li><li class="L7"><code><span class="pln">                value</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">},</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> formItemLayout </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">            labelCol</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> span</span><span class="pun">:</span><span class="pln"> </span><span class="lit">7</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L5"><code><span class="pln">            wrapperCol</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> span</span><span class="pun">:</span><span class="pln"> </span><span class="lit">12</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">};</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> number </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">number</span><span class="pun">;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> tips </span><span class="pun">=</span><span class="pln"> </span><span class="str">'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.'</span><span class="pun">;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Form</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">FormItem</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">{...</span><span class="pln">formItemLayout</span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">                    label</span><span class="pun">=</span><span class="str">"Prime between 8 &amp; 12"</span></code></li><li class="L4"><code><span class="pln">                    validateStatus</span><span class="pun">={</span><span class="pln">number</span><span class="pun">.</span><span class="pln">validateStatus</span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">                    help</span><span class="pun">={</span><span class="pln">number</span><span class="pun">.</span><span class="pln">errorMsg </span><span class="pun">||</span><span class="pln"> tips</span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">InputNumber</span></code></li><li class="L8"><code><span class="pln">                        min</span><span class="pun">={</span><span class="lit">8</span><span class="pun">}</span></code></li><li class="L9"><code><span class="pln">                        max</span><span class="pun">={</span><span class="lit">12</span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">                        value</span><span class="pun">={</span><span class="pln">number</span><span class="pun">.</span><span class="pln">value</span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">                        onChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleNumberChange</span><span class="pun">}</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">/&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">FormItem</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">Form</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L7"><code><span class="pun">}</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;

export default {
	code,
}