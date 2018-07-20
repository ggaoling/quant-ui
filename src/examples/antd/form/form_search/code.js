const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="7nc6"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Form</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Row</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Col</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Input</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Icon</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span></code></li><li class="L2"><code><span class="kwd">import</span><span class="pln"> </span><span class="str">'./style.less'</span></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">FormItem</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Form</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">;</span></code></li><li class="L4"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">AdvancedSearchForm</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">    state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">        expand</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">};</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="pln">    handleSearch </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">        e</span><span class="pun">.</span><span class="pln">preventDefault</span><span class="pun">();</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">form</span><span class="pun">.</span><span class="pln">validateFields</span><span class="pun">((</span><span class="pln">err</span><span class="pun">,</span><span class="pln"> values</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">            console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'Received values of form: '</span><span class="pun">,</span><span class="pln"> values</span><span class="pun">);</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="pln">    handleReset </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">form</span><span class="pun">.</span><span class="pln">resetFields</span><span class="pun">();</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">    toggle </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> expand </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">;</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln"> expand</span><span class="pun">:</span><span class="pln"> </span><span class="pun">!</span><span class="pln">expand </span><span class="pun">});</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="pln">    </span><span class="com">// To generate mock Form.Item</span></code></li><li class="L6"><code><span class="pln">    getFields</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> count </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">expand </span><span class="pun">?</span><span class="pln"> </span><span class="lit">10</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="lit">6</span><span class="pun">;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> getFieldDecorator </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">form</span><span class="pun">;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> children </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[];</span></code></li><li class="L0"><code><span class="pln">        </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">            children</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Col</span><span class="pln"> span</span><span class="pun">={</span><span class="lit">8</span><span class="pun">}</span><span class="pln"> key</span><span class="pun">={</span><span class="pln">i</span><span class="pun">}</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln"> display</span><span class="pun">:</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> count </span><span class="pun">?</span><span class="pln"> </span><span class="str">'block'</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="str">'none'</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">FormItem</span><span class="pln"> label</span><span class="pun">={</span><span class="str">'Field'</span><span class="pun">+</span><span class="pln"> i</span><span class="pun">}&gt;</span></code></li><li class="L4"><code><span class="pln">                        </span><span class="pun">{</span><span class="pln">getFieldDecorator</span><span class="pun">(</span><span class="str">'field-'</span><span class="pun">+</span><span class="pln">i</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">                            rules</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[{</span></code></li><li class="L6"><code><span class="pln">                                required</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">                                message</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Input something!'</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">                            </span><span class="pun">}],</span></code></li><li class="L9"><code><span class="pln">                        </span><span class="pun">})(</span></code></li><li class="L0"><code><span class="pln">                            </span><span class="pun">&lt;</span><span class="typ">Input</span><span class="pln"> placeholder</span><span class="pun">=</span><span class="str">"placeholder"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L1"><code><span class="pln">                        </span><span class="pun">)}</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">FormItem</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Col</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">);</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> children</span><span class="pun">;</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L1"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Form</span></code></li><li class="L2"><code><span class="pln">                className</span><span class="pun">=</span><span class="str">"ant-advanced-search-form"</span></code></li><li class="L3"><code><span class="pln">                onSubmit</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleSearch</span><span class="pun">}</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Row</span><span class="pln"> gutter</span><span class="pun">={</span><span class="lit">24</span><span class="pun">}&gt;{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">getFields</span><span class="pun">()}&lt;/</span><span class="typ">Row</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Row</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Col</span><span class="pln"> span</span><span class="pun">={</span><span class="lit">24</span><span class="pun">}</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln"> textAlign</span><span class="pun">:</span><span class="pln"> </span><span class="str">'right'</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L8"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"primary"</span><span class="pln"> htmlType</span><span class="pun">=</span><span class="str">"submit"</span><span class="pun">&gt;</span><span class="typ">Search</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln"> marginLeft</span><span class="pun">:</span><span class="pln"> </span><span class="lit">8</span><span class="pln"> </span><span class="pun">}}</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleReset</span><span class="pun">}&gt;</span></code></li><li class="L0"><code><span class="pln">                            </span><span class="typ">Clear</span></code></li><li class="L1"><code><span class="pln">                        </span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="pln">a style</span><span class="pun">={{</span><span class="pln"> marginLeft</span><span class="pun">:</span><span class="pln"> </span><span class="lit">8</span><span class="pun">,</span><span class="pln"> fontSize</span><span class="pun">:</span><span class="pln"> </span><span class="lit">12</span><span class="pln"> </span><span class="pun">}}</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">toggle</span><span class="pun">}&gt;</span></code></li><li class="L3"><code><span class="pln">                            </span><span class="typ">Collapse</span><span class="pln"> </span><span class="pun">&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">expand </span><span class="pun">?</span><span class="pln"> </span><span class="str">'up'</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="str">'down'</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L4"><code><span class="pln">                        </span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Col</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Row</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">Form</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pun">}</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">WrappedAdvancedSearchForm</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Form</span><span class="pun">.</span><span class="pln">create</span><span class="pun">()(</span><span class="typ">AdvancedSearchForm</span><span class="pun">);</span></code></li><li class="L3"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L6"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">WrappedAdvancedSearchForm</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">br </span><span class="pun">/&gt;&lt;</span><span class="pln">br </span><span class="pun">/&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">div className</span><span class="pun">=</span><span class="str">"search-result-list"</span><span class="pln"> </span><span class="pun">&gt;</span><span class="typ">Search</span><span class="pln"> </span><span class="typ">Result</span><span class="pln"> </span><span class="typ">List</span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L3"><code><span class="pun">}</span></code></li><li class="L4"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L5"><code></code></li><li class="L6"><code></code></li><li class="L7"><code></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="pun">.</span><span class="pln">ant</span><span class="pun">-</span><span class="pln">advanced</span><span class="pun">-</span><span class="pln">search</span><span class="pun">-</span><span class="pln">form </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">    padding</span><span class="pun">:</span><span class="pln"> </span><span class="lit">24px</span><span class="pun">;</span></code></li><li class="L1"><code><span class="pln">    background</span><span class="pun">:</span><span class="pln"> </span><span class="com">#fbfbfb;</span></code></li><li class="L2"><code><span class="pln">    border</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1px</span><span class="pln"> solid </span><span class="com">#d9d9d9;</span></code></li><li class="L3"><code><span class="pln">    border</span><span class="pun">-</span><span class="pln">radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">6px</span><span class="pun">;</span></code></li><li class="L4"><code><span class="pun">}</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="pun">.</span><span class="pln">ant</span><span class="pun">-</span><span class="pln">advanced</span><span class="pun">-</span><span class="pln">search</span><span class="pun">-</span><span class="pln">form </span><span class="pun">.</span><span class="pln">ant</span><span class="pun">-</span><span class="pln">form</span><span class="pun">-</span><span class="pln">item </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">    display</span><span class="pun">:</span><span class="pln"> flex</span><span class="pun">;</span></code></li><li class="L8"><code><span class="pun">}</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pun">.</span><span class="pln">ant</span><span class="pun">-</span><span class="pln">advanced</span><span class="pun">-</span><span class="pln">search</span><span class="pun">-</span><span class="pln">form </span><span class="pun">.</span><span class="pln">ant</span><span class="pun">-</span><span class="pln">form</span><span class="pun">-</span><span class="pln">item</span><span class="pun">-</span><span class="pln">control</span><span class="pun">-</span><span class="pln">wrapper </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">    flex</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></code></li><li class="L2"><code><span class="pun">}</span></code></li><li class="L3"><code><span class="pun">.</span><span class="pln">search</span><span class="pun">-</span><span class="pln">result</span><span class="pun">-</span><span class="pln">list </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    padding</span><span class="pun">:</span><span class="pln"> </span><span class="lit">24px</span><span class="pun">;</span></code></li><li class="L5"><code><span class="pln">    background</span><span class="pun">:</span><span class="pln"> </span><span class="com">#fbfbfb;</span></code></li><li class="L6"><code><span class="pln">    border</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1px</span><span class="pln"> solid </span><span class="com">#d9d9d9;</span></code></li><li class="L7"><code><span class="pln">    border</span><span class="pun">-</span><span class="pln">radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">6px</span><span class="pun">;</span></code></li><li class="L8"><code><span class="pln">    text</span><span class="pun">-</span><span class="pln">align</span><span class="pun">:</span><span class="pln"> center</span><span class="pun">;</span></code></li><li class="L9"><code><span class="pun">}</span></code></li></ol></pre>`;

export default {
	code,
}