const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="7nc6"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Form</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Select</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Input</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">FormItem</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Form</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">;</span></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">Option</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Select</span><span class="pun">.</span><span class="typ">Option</span><span class="pun">;</span></code></li><li class="L4"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">App</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">    handleSubmit </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">        e</span><span class="pun">.</span><span class="pln">preventDefault</span><span class="pun">();</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">form</span><span class="pun">.</span><span class="pln">validateFields</span><span class="pun">((</span><span class="pln">err</span><span class="pun">,</span><span class="pln"> values</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">            </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(!</span><span class="pln">err</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">                console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'Received values of form: '</span><span class="pun">,</span><span class="pln"> values</span><span class="pun">);</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="pln">    handleSelectChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">value</span><span class="pun">);</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">form</span><span class="pun">.</span><span class="pln">setFieldsValue</span><span class="pun">({</span></code></li><li class="L7"><code><span class="pln">            note</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Hi,'</span><span class="pun">+</span><span class="pln"> </span><span class="pun">(</span><span class="pln">value </span><span class="pun">===</span><span class="pln"> </span><span class="str">'male'</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="str">'man'</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="str">'lady'</span><span class="pun">)+</span><span class="str">'!'</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> getFieldDecorator </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">form</span><span class="pun">;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Form</span><span class="pln"> onSubmit</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleSubmit</span><span class="pun">}&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">FormItem</span></code></li><li class="L6"><code><span class="pln">                    label</span><span class="pun">=</span><span class="str">"Note"</span></code></li><li class="L7"><code><span class="pln">                    labelCol</span><span class="pun">={{</span><span class="pln"> span</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L8"><code><span class="pln">                    wrapperCol</span><span class="pun">={{</span><span class="pln"> span</span><span class="pun">:</span><span class="pln"> </span><span class="lit">12</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">{</span><span class="pln">getFieldDecorator</span><span class="pun">(</span><span class="str">'note'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">                        rules</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[{</span><span class="pln"> required</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> message</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Please input your note!'</span><span class="pln"> </span><span class="pun">}],</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">})(</span></code></li><li class="L3"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Input</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">)}</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">FormItem</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">FormItem</span></code></li><li class="L7"><code><span class="pln">                    label</span><span class="pun">=</span><span class="str">"Gender"</span></code></li><li class="L8"><code><span class="pln">                    labelCol</span><span class="pun">={{</span><span class="pln"> span</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L9"><code><span class="pln">                    wrapperCol</span><span class="pun">={{</span><span class="pln"> span</span><span class="pun">:</span><span class="pln"> </span><span class="lit">12</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">{</span><span class="pln">getFieldDecorator</span><span class="pun">(</span><span class="str">'gender'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">                        rules</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[{</span><span class="pln"> required</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> message</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Please select your gender!'</span><span class="pln"> </span><span class="pun">}],</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="pun">})(</span></code></li><li class="L4"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Select</span></code></li><li class="L5"><code><span class="pln">                            placeholder</span><span class="pun">=</span><span class="str">"Select a option and change input text above"</span></code></li><li class="L6"><code><span class="pln">                            onChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleSelectChange</span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">                        </span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                            </span><span class="pun">&lt;</span><span class="typ">Option</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"male"</span><span class="pun">&gt;</span><span class="pln">male</span><span class="pun">&lt;/</span><span class="typ">Option</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                            </span><span class="pun">&lt;</span><span class="typ">Option</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"female"</span><span class="pun">&gt;</span><span class="pln">female</span><span class="pun">&lt;/</span><span class="typ">Option</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                        </span><span class="pun">&lt;/</span><span class="typ">Select</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">)}</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">FormItem</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">FormItem</span></code></li><li class="L4"><code><span class="pln">                    wrapperCol</span><span class="pun">={{</span><span class="pln"> span</span><span class="pun">:</span><span class="pln"> </span><span class="lit">12</span><span class="pun">,</span><span class="pln"> offset</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"primary"</span><span class="pln"> htmlType</span><span class="pun">=</span><span class="str">"submit"</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                        </span><span class="typ">Submit</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">FormItem</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">Form</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L3"><code><span class="pun">}</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">WrappedApp</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Form</span><span class="pun">.</span><span class="pln">create</span><span class="pun">()(</span><span class="typ">App</span><span class="pun">);</span></code></li><li class="L6"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L9"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">WrappedApp</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln"> </span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pun">}</span></code></li><li class="L3"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;

export default {
	code,
}