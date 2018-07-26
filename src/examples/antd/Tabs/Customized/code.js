const code=`<pre class="prettyprint linenums prettyprinted" data-anchor-id="edkq" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Tabs</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">TabPane</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Tabs</span><span class="pun">.</span><span class="typ">TabPane</span><span class="pun">;</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">    constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">newTabIndex </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> panes </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Tab 1'</span><span class="pun">,</span><span class="pln"> content</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Content of Tab 1'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'1'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L1"><code><span class="pln">            </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Tab 2'</span><span class="pun">,</span><span class="pln"> content</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Content of Tab 2'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'2'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L2"><code><span class="pln">            </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Tab 3'</span><span class="pun">,</span><span class="pln"> content</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Content of Tab 3'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'3'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">];</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">            activeKey</span><span class="pun">:</span><span class="pln"> panes</span><span class="pun">[</span><span class="lit">0</span><span class="pun">].</span><span class="pln">key</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">            panes</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">};</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">    onChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">activeKey</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln"> activeKey </span><span class="pun">});</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="pln">    onEdit </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">targetKey</span><span class="pun">,</span><span class="pln"> action</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">[</span><span class="pln">action</span><span class="pun">](</span><span class="pln">targetKey</span><span class="pun">);</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L7"><code></code></li><li class="L8"><code><span class="pln">    add </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> panes </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">panes</span><span class="pun">;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> activeKey </span><span class="pun">=</span><span class="pln"> </span><span class="str">\`newTab$\{this.newTabIndex++}\`</span><span class="pun">;</span></code></li><li class="L1"><code><span class="pln">        panes</span><span class="pun">.</span><span class="pln">push</span><span class="pun">({</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'New Tab'</span><span class="pun">,</span><span class="pln"> content</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Content of new Tab'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> activeKey </span><span class="pun">});</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln"> panes</span><span class="pun">,</span><span class="pln"> activeKey </span><span class="pun">});</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="pln">    remove </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">targetKey</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">let</span><span class="pln"> activeKey </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">activeKey</span><span class="pun">;</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">let</span><span class="pln"> lastIndex</span><span class="pun">;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">panes</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">((</span><span class="pln">pane</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">            </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">pane</span><span class="pun">.</span><span class="pln">key </span><span class="pun">===</span><span class="pln"> targetKey</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">                lastIndex </span><span class="pun">=</span><span class="pln"> i </span><span class="pun">-</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></code></li><li class="L1"><code><span class="pln">            </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> panes </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">panes</span><span class="pun">.</span><span class="pln">filter</span><span class="pun">(</span><span class="pln">pane </span><span class="pun">=&gt;</span><span class="pln"> pane</span><span class="pun">.</span><span class="pln">key </span><span class="pun">!==</span><span class="pln"> targetKey</span><span class="pun">);</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">lastIndex </span><span class="pun">&gt;=</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> activeKey </span><span class="pun">===</span><span class="pln"> targetKey</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">            activeKey </span><span class="pun">=</span><span class="pln"> panes</span><span class="pun">[</span><span class="pln">lastIndex</span><span class="pun">].</span><span class="pln">key</span><span class="pun">;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln"> panes</span><span class="pun">,</span><span class="pln"> activeKey </span><span class="pun">});</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L2"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">add</span><span class="pun">}&gt;</span><span class="typ">Add</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">br</span><span class="pun">/&gt;&lt;</span><span class="pln">br</span><span class="pun">/&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Tabs</span></code></li><li class="L6"><code><span class="pln">                    type</span><span class="pun">=</span><span class="str">'editable-card'</span></code></li><li class="L7"><code><span class="pln">                    onChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onChange</span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">                    activeKey</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">activeKey</span><span class="pun">}</span></code></li><li class="L9"><code><span class="pln">                    onEdit</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onEdit</span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">                    hideAdd</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">panes</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="pln">pane </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">&lt;</span><span class="typ">TabPane</span><span class="pln"> tab</span><span class="pun">={</span><span class="pln">pane</span><span class="pun">.</span><span class="pln">title</span><span class="pun">}</span><span class="pln"> key</span><span class="pun">={</span><span class="pln">pane</span><span class="pun">.</span><span class="pln">key</span><span class="pun">}</span><span class="pln"> closable</span><span class="pun">={</span><span class="pln">pane</span><span class="pun">.</span><span class="pln">closable</span><span class="pun">}&gt;{</span><span class="pln">pane</span><span class="pun">.</span><span class="pln">content</span><span class="pun">}&lt;/</span><span class="typ">TabPane</span><span class="pun">&gt;)}</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Tabs</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L7"><code><span class="pun">}</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L0"><code></code></li><li class="L1"><code></code></li></ol></pre>`;

export default{
    code,
}