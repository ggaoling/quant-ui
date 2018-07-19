const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="2nf7" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Tooltip</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> title </span><span class="pun">=</span><span class="pln"> </span><span class="str">&lt;span&gt;</span><span class="typ">Prompt</span><span class="pln"> text</span><span class="pun">&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">ButtonWidth</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="lit">70</span><span class="pun">;</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="kwd">const</span><span class="pln"> style </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> margin</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10</span><span class="pln"> </span><span class="pun">}</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">div className</span><span class="pun">=</span><span class="str">"demo"</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="str">&lt;div&gt;</span><span class="pln">click us</span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> marginLeft</span><span class="pun">:</span><span class="pln"> </span><span class="typ">ButtonWidth</span><span class="pun">,</span><span class="pln"> whiteSpace</span><span class="pun">:</span><span class="pln"> </span><span class="str">'nowrap'</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Tooltip</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"topLeft"</span><span class="pln"> title</span><span class="pun">={</span><span class="pln">title</span><span class="pun">}</span><span class="pln">  </span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">style</span><span class="pun">}&gt;</span><span class="pln">TL</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Tooltip</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Tooltip</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"top"</span><span class="pln"> title</span><span class="pun">={</span><span class="pln">title</span><span class="pun">}</span><span class="pln">  </span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">style</span><span class="pun">}&gt;</span><span class="typ">Top</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Tooltip</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Tooltip</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"topRight"</span><span class="pln"> title</span><span class="pun">={</span><span class="pln">title</span><span class="pun">}</span><span class="pln">  </span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">style</span><span class="pun">}&gt;</span><span class="pln">TR</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Tooltip</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="typ">ButtonWidth</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">float</span><span class="pun">:</span><span class="pln"> </span><span class="str">'left'</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Tooltip</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"leftTop"</span><span class="pln"> title</span><span class="pun">={</span><span class="pln">title</span><span class="pun">}</span><span class="pln">  </span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">style</span><span class="pun">}&gt;</span><span class="pln">LT</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Tooltip</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Tooltip</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"left"</span><span class="pln"> title</span><span class="pun">={</span><span class="pln">title</span><span class="pun">}</span><span class="pln">  </span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">style</span><span class="pun">}&gt;</span><span class="typ">Left</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Tooltip</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Tooltip</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"leftBottom"</span><span class="pln"> title</span><span class="pun">={</span><span class="pln">title</span><span class="pun">}</span><span class="pln">  </span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">style</span><span class="pun">}&gt;</span><span class="pln">LB</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Tooltip</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="typ">ButtonWidth</span><span class="pun">,</span><span class="pln"> marginLeft</span><span class="pun">:</span><span class="pln"> </span><span class="pun">(</span><span class="typ">ButtonWidth</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="lit">4</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="lit">24</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Tooltip</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"rightTop"</span><span class="pln"> title</span><span class="pun">={</span><span class="pln">title</span><span class="pun">}</span><span class="pln">  </span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">style</span><span class="pun">}&gt;</span><span class="pln">RT</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Tooltip</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Tooltip</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"right"</span><span class="pln"> title</span><span class="pun">={</span><span class="pln">title</span><span class="pun">}</span><span class="pln">  </span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">style</span><span class="pun">}&gt;</span><span class="typ">Right</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Tooltip</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Tooltip</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"rightBottom"</span><span class="pln"> title</span><span class="pun">={</span><span class="pln">title</span><span class="pun">}</span><span class="pln">  </span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">style</span><span class="pun">}&gt;</span><span class="pln">RB</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Tooltip</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> marginLeft</span><span class="pun">:</span><span class="pln"> </span><span class="typ">ButtonWidth</span><span class="pun">,</span><span class="pln"> clear</span><span class="pun">:</span><span class="pln"> </span><span class="str">'both'</span><span class="pun">,</span><span class="pln"> whiteSpace</span><span class="pun">:</span><span class="pln"> </span><span class="str">'nowrap'</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Tooltip</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"bottomLeft"</span><span class="pln"> title</span><span class="pun">={</span><span class="pln">title</span><span class="pun">}</span><span class="pln">  </span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">style</span><span class="pun">}&gt;</span><span class="pln">BL</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Tooltip</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Tooltip</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"bottom"</span><span class="pln"> title</span><span class="pun">={</span><span class="pln">title</span><span class="pun">}</span><span class="pln">  </span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">style</span><span class="pun">}&gt;</span><span class="typ">Bottom</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Tooltip</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Tooltip</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"bottomRight"</span><span class="pln"> title</span><span class="pun">={</span><span class="pln">title</span><span class="pun">}</span><span class="pln">  </span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">style</span><span class="pun">}&gt;</span><span class="pln">BR</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Tooltip</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pun">}</span></code></li><li class="L3"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L4"><code></code></li></ol></pre>`;

export default {
	code,
}