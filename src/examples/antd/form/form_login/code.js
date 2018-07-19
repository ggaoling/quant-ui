const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="7nc6"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Form</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Icon</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Input</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Checkbox</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">import</span><span class="pln"> </span><span class="str">'./style.less'</span></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">FormItem</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Form</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">;</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">NormalLoginForm</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">    handleSubmit </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        e</span><span class="pun">.</span><span class="pln">preventDefault</span><span class="pun">();</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">form</span><span class="pun">.</span><span class="pln">validateFields</span><span class="pun">((</span><span class="pln">err</span><span class="pun">,</span><span class="pln"> values</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">            </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(!</span><span class="pln">err</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">                console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'Received values of form: '</span><span class="pun">,</span><span class="pln"> values</span><span class="pun">);</span></code></li><li class="L1"><code><span class="pln">            </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> getFieldDecorator </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">form</span><span class="pun">;</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Form</span><span class="pln"> onSubmit</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleSubmit</span><span class="pun">}</span><span class="pln"> className</span><span class="pun">=</span><span class="str">"login-form"</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">FormItem</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">{</span><span class="pln">getFieldDecorator</span><span class="pun">(</span><span class="str">'userName'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">                        rules</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[{</span><span class="pln"> required</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> message</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Please input your username!'</span><span class="pln"> </span><span class="pun">}],</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">})(</span></code></li><li class="L3"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Input</span><span class="pln"> prefix</span><span class="pun">={&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"user"</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgba(0,0,0,.25)'</span><span class="pln"> </span><span class="pun">}}</span><span class="pln"> </span><span class="pun">/&gt;}</span><span class="pln"> placeholder</span><span class="pun">=</span><span class="str">"Username"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">)}</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">FormItem</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">FormItem</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">{</span><span class="pln">getFieldDecorator</span><span class="pun">(</span><span class="str">'password'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">                        rules</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[{</span><span class="pln"> required</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> message</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Please input your Password!'</span><span class="pln"> </span><span class="pun">}],</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="pun">})(</span></code></li><li class="L0"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Input</span><span class="pln"> prefix</span><span class="pun">={&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"lock"</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgba(0,0,0,.25)'</span><span class="pln"> </span><span class="pun">}}</span><span class="pln"> </span><span class="pun">/&gt;}</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"password"</span><span class="pln"> placeholder</span><span class="pun">=</span><span class="str">"Password"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">)}</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">FormItem</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">FormItem</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">{</span><span class="pln">getFieldDecorator</span><span class="pun">(</span><span class="str">'remember'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">                        valuePropName</span><span class="pun">:</span><span class="pln"> </span><span class="str">'checked'</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">                        initialValue</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">})(</span></code></li><li class="L8"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Checkbox</span><span class="pun">&gt;</span><span class="typ">Remember</span><span class="pln"> me</span><span class="pun">&lt;/</span><span class="typ">Checkbox</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="pun">)}</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="pln">a className</span><span class="pun">=</span><span class="str">"login-form-forgot"</span><span class="pln"> href</span><span class="pun">=</span><span class="str">""</span><span class="pun">&gt;</span><span class="typ">Forgot</span><span class="pln"> password</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="pln">br </span><span class="pun">/&gt;&lt;</span><span class="pln">br </span><span class="pun">/&gt;</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"primary"</span><span class="pln"> htmlType</span><span class="pun">=</span><span class="str">"submit"</span><span class="pln"> className</span><span class="pun">=</span><span class="str">"login-form-button"</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                        </span><span class="typ">Log</span><span class="pln"> </span><span class="kwd">in</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="pun">&amp;</span><span class="pln">nbsp</span><span class="pun">;</span><span class="typ">Or</span><span class="pln"> </span><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">""</span><span class="pun">&gt;</span><span class="kwd">register</span><span class="pln"> now</span><span class="pun">!&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">FormItem</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">Form</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pun">}</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">WrappedNormalLoginForm</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Form</span><span class="pun">.</span><span class="pln">create</span><span class="pun">()(</span><span class="typ">NormalLoginForm</span><span class="pun">);</span></code></li><li class="L3"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">WrappedNormalLoginForm</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L9"><code><span class="pun">}</span></code></li><li class="L0"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L1"><code></code></li><li class="L2"><code></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="com">#components-form-demo-normal-login .login-form {</span></code></li><li class="L5"><code><span class="pln">    max</span><span class="pun">-</span><span class="pln">width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">300px</span><span class="pun">;</span></code></li><li class="L6"><code><span class="pun">}</span></code></li><li class="L7"><code><span class="com">#components-form-demo-normal-login .login-form-forgot {</span></code></li><li class="L8"><code><span class="pln">    </span><span class="kwd">float</span><span class="pun">:</span><span class="pln"> right</span><span class="pun">;</span></code></li><li class="L9"><code><span class="pun">}</span></code></li><li class="L0"><code><span class="com">#components-form-demo-normal-login .login-form-button {</span></code></li><li class="L1"><code><span class="pln">    width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">%;</span></code></li><li class="L2"><code><span class="pun">}</span></code></li></ol></pre>`;

export default {
	code,
}