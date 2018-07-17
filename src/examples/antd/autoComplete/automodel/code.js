const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="6sh5"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Icon</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Input</span><span class="pun">,</span><span class="pln"> </span><span class="typ">AutoComplete</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">Option</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">AutoComplete</span><span class="pun">.</span><span class="typ">Option</span><span class="pun">;</span></code></li><li class="L4"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">OptGroup</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">AutoComplete</span><span class="pun">.</span><span class="typ">OptGroup</span><span class="pun">;</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="kwd">const</span><span class="pln"> dataSource </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'话题'</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">        children</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">                title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'AntDesign'</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">                count</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10000</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">},</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">                title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'AntDesign UI'</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">                count</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10600</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">],</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">},</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'问题'</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">        children</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">                title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'AntDesign UI 有多好'</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">                count</span><span class="pun">:</span><span class="pln"> </span><span class="lit">60100</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">},</span></code></li><li class="L7"><code></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">                title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'AntDesign 是啥'</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">                count</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30010</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">            </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pln">        </span><span class="pun">],</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">},</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'文章'</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">        children</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">                title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'AntDesign 是一个设计语言'</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">                count</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100000</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">        </span><span class="pun">],</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L3"><code><span class="pun">];</span></code></li><li class="L4"><code><span class="kwd">function</span><span class="pln"> renderTitle</span><span class="pun">(</span><span class="pln">title</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L6"><code><span class="pln">        </span><span class="str">&lt;span&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">{</span><span class="pln">title</span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">a</span></code></li><li class="L9"><code><span class="pln">                style</span><span class="pun">={{</span><span class="pln"> </span><span class="kwd">float</span><span class="pun">:</span><span class="pln"> </span><span class="str">'right'</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L0"><code><span class="pln">                href</span><span class="pun">=</span><span class="str">"https://www.google.com/search?q=antd"</span></code></li><li class="L1"><code><span class="pln">                target</span><span class="pun">=</span><span class="str">"_blank"</span></code></li><li class="L2"><code><span class="pln">                rel</span><span class="pun">=</span><span class="str">"noopener noreferrer"</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">&gt;更多</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">);</span></code></li><li class="L7"><code><span class="pun">}</span></code></li><li class="L8"><code><span class="kwd">const</span><span class="pln"> options </span><span class="pun">=</span><span class="pln"> dataSource</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="kwd">group</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">&lt;</span><span class="typ">OptGroup</span></code></li><li class="L0"><code><span class="pln">        key</span><span class="pun">={</span><span class="kwd">group</span><span class="pun">.</span><span class="pln">title</span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">        label</span><span class="pun">={</span><span class="pln">renderTitle</span><span class="pun">(</span><span class="kwd">group</span><span class="pun">.</span><span class="pln">title</span><span class="pun">)}</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">{</span><span class="kwd">group</span><span class="pun">.</span><span class="pln">children</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="pln">opt </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Option</span><span class="pln"> key</span><span class="pun">={</span><span class="pln">opt</span><span class="pun">.</span><span class="pln">title</span><span class="pun">}</span><span class="pln"> value</span><span class="pun">={</span><span class="pln">opt</span><span class="pun">.</span><span class="pln">title</span><span class="pun">}&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">{</span><span class="pln">opt</span><span class="pun">.</span><span class="pln">title</span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">span className</span><span class="pun">=</span><span class="str">"certain-search-item-count"</span><span class="pun">&gt;{</span><span class="pln">opt</span><span class="pun">.</span><span class="pln">count</span><span class="pun">}</span><span class="pln"> </span><span class="pun">人</span><span class="pln"> </span><span class="pun">关注&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">Option</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">))}</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">&lt;/</span><span class="typ">OptGroup</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pun">)).</span><span class="pln">concat</span><span class="pun">([</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">&lt;</span><span class="typ">Option</span><span class="pln"> disabled key</span><span class="pun">=</span><span class="str">"all"</span><span class="pln"> className</span><span class="pun">=</span><span class="str">"show-all"</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="pln">a</span></code></li><li class="L3"><code><span class="pln">            href</span><span class="pun">=</span><span class="str">"https://www.google.com/search?q=antd"</span></code></li><li class="L4"><code><span class="pln">            target</span><span class="pun">=</span><span class="str">"_blank"</span></code></li><li class="L5"><code><span class="pln">            rel</span><span class="pun">=</span><span class="str">"noopener noreferrer"</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">查看所有结果</span></code></li><li class="L8"><code><span class="pln">      </span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">&lt;/</span><span class="typ">Option</span><span class="pun">&gt;,</span></code></li><li class="L0"><code><span class="pun">]);</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">div className</span><span class="pun">=</span><span class="str">"certain-category-search-wrapper"</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">250</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">AutoComplete</span></code></li><li class="L8"><code><span class="pln">                    className</span><span class="pun">=</span><span class="str">"certain-category-search"</span></code></li><li class="L9"><code><span class="pln">                    dropdownClassName</span><span class="pun">=</span><span class="str">"certain-category-search-dropdown"</span></code></li><li class="L0"><code><span class="pln">                    dropdownMatchSelectWidth</span><span class="pun">={</span><span class="kwd">false</span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">                    dropdownStyle</span><span class="pun">={{</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">300</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L2"><code><span class="pln">                    size</span><span class="pun">=</span><span class="str">"large"</span></code></li><li class="L3"><code><span class="pln">                    style</span><span class="pun">={{</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="str">'100%'</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L4"><code><span class="pln">                    dataSource</span><span class="pun">={</span><span class="pln">options</span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">                    placeholder</span><span class="pun">=</span><span class="str">"input here"</span></code></li><li class="L6"><code><span class="pln">                    optionLabelProp</span><span class="pun">=</span><span class="str">"value"</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Input</span><span class="pln"> suffix</span><span class="pun">={&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"search"</span><span class="pln"> className</span><span class="pun">=</span><span class="str">"certain-category-icon"</span><span class="pln"> </span><span class="pun">/&gt;}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">AutoComplete</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L3"><code><span class="pun">}</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;

export default {
	code,
}