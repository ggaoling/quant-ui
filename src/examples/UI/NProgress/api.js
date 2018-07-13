const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="m9k3" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="typ">Button</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Nprogress</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">NProgressCode</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">    nprogressStart </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">        </span><span class="typ">Nprogress</span><span class="pun">.</span><span class="pln">start</span><span class="pun">();</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">};</span></code></li><li class="L6"><code><span class="pln">    nprogressDone </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        </span><span class="typ">Nprogress</span><span class="pun">.</span><span class="kwd">done</span><span class="pun">();</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">};</span></code></li><li class="L9"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L1"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="str">&lt;p&gt;</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> icon</span><span class="pun">=</span><span class="str">"caret-right"</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">nprogressStart</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="str">&lt;span&gt;</span><span class="pln"> </span><span class="typ">Nprogress</span><span class="pun">.</span><span class="pln">start</span><span class="pun">()</span><span class="pln"> </span><span class="pun">—</span><span class="pln"> </span><span class="pun">显示进度条&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">p style</span><span class="pun">={{</span><span class="pln">marginTop</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">}}&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> icon</span><span class="pun">=</span><span class="str">"caret-right"</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">nprogressDone</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="str">&lt;span&gt;</span><span class="pln">  </span><span class="typ">Nprogress</span><span class="pun">.</span><span class="kwd">done</span><span class="pun">()</span><span class="pln"> </span><span class="pun">—</span><span class="pln"> </span><span class="pun">进度条完成&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L3"><code><span class="pun">}</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">NProgressCode</span><span class="pun">;</span></code></li></ol></pre>
`;
const api = [
	{
		key:"1",
		parameter:"set(n)",  //字段名
		type:'function',	//类型
		must:'',
		default:'',							//默认值
		instructions:'要设置进度百分比，请调用.set(n)，其中n是两者之间的数字0..1'	//描述
	},
	{
		key:"2",
		parameter:"inc(n)",  //字段名
		type:'function',	//类型
		must:'',
		default:'',							//默认值
		instructions:'要增加进度条，只需使用.inc()。这会随机增加它。这永远不会达到100％参数不必穿'	//描述
	},
];

export default {
	code,
	api
}