const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="ixv0" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">EntryTable</span><span class="pun">,</span><span class="typ">Button</span><span class="pun">,</span><span class="typ">Divider</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">const</span><span class="pln"> columns </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[];</span></code></li><li class="L3"><code><span class="kwd">for</span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">10</span><span class="pln"> </span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++){</span></code></li><li class="L4"><code><span class="pln">    columns</span><span class="pun">.</span><span class="pln">push</span><span class="pun">({</span></code></li><li class="L5"><code><span class="pln">        title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'列-'</span><span class="pun">+</span><span class="pln">i</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">        dataIndex</span><span class="pun">:</span><span class="pln"> </span><span class="str">"dataIndex"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">        width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">        key</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">})</span></code></li><li class="L0"><code><span class="pun">}</span></code></li><li class="L1"><code><span class="kwd">const</span><span class="pln"> dataSource </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[];</span></code></li><li class="L2"><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">    dataSource</span><span class="pun">.</span><span class="pln">push</span><span class="pun">({</span></code></li><li class="L4"><code><span class="pln">        key</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">        dataIndex0</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">        dataIndex1</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">        dataIndex2</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">        dataIndex3</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">        dataIndex4</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">        dataIndex5</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">        dataIndex6</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">        dataIndex7</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">        dataIndex8</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">        dataIndex9</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">        id</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">})</span></code></li><li class="L7"><code><span class="pun">}</span></code></li><li class="L8"><code><span class="kwd">const</span><span class="pln"> colSpanf </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">text</span><span class="pun">,</span><span class="pln">record</span><span class="pun">,</span><span class="pln">index</span><span class="pun">,</span><span class="pln">dataIndex</span><span class="pun">,</span><span class="pln">collocate</span><span class="pun">,</span><span class="pln">len</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;{</span></code></li><li class="L9"><code><span class="pln">    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">collocate</span><span class="pun">.</span><span class="pln">key </span><span class="pun">===</span><span class="pln"> </span><span class="lit">3</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> record</span><span class="pun">.</span><span class="pln">key </span><span class="pun">===</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> </span><span class="pun">){</span></code></li><li class="L0"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">            colSpan</span><span class="pun">:</span><span class="lit">2</span></code></li><li class="L2"><code><span class="pln">        </span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L4"><code><span class="pln">    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">collocate</span><span class="pun">.</span><span class="pln">key </span><span class="pun">===</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> record</span><span class="pun">.</span><span class="pln">key </span><span class="pun">===</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> </span><span class="pun">){</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">            colSpan</span><span class="pun">:</span><span class="lit">0</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L9"><code><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{}</span></code></li><li class="L0"><code><span class="pun">}</span></code></li><li class="L1"><code><span class="kwd">const</span><span class="pln"> props </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">text</span><span class="pun">,</span><span class="pln">record</span><span class="pun">,</span><span class="pln">index</span><span class="pun">,</span><span class="pln">dataIndex</span><span class="pun">,</span><span class="pln">collocate</span><span class="pun">,</span><span class="pln">len</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;{</span></code></li><li class="L2"><code><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">index </span><span class="pun">===</span><span class="pln"> </span><span class="lit">2</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">            rowSpan</span><span class="pun">:</span><span class="lit">3</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">index </span><span class="pun">===</span><span class="pln"> </span><span class="lit">3</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">            rowSpan</span><span class="pun">:</span><span class="lit">0</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">index </span><span class="pun">===</span><span class="pln"> </span><span class="lit">4</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">            rowSpan</span><span class="pun">:</span><span class="lit">0</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{}</span></code></li><li class="L8"><code><span class="pun">}</span></code></li><li class="L9"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">    constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L4"><code><span class="pln">    setFixed </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;{</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">let</span><span class="pln"> </span><span class="pun">{</span><span class="pln">table</span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">refs</span><span class="pun">;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">let</span><span class="pln"> columns </span><span class="pun">=</span><span class="pln"> table</span><span class="pun">.</span><span class="pln">getColumns</span><span class="pun">();</span></code></li><li class="L7"><code><span class="pln">        columns</span><span class="pun">[</span><span class="lit">0</span><span class="pun">].</span><span class="kwd">fixed</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="str">"left"</span><span class="pun">;</span></code></li><li class="L8"><code><span class="pln">        table</span><span class="pun">.</span><span class="pln">setColumns</span><span class="pun">(</span><span class="pln">columns</span><span class="pun">)</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="pln">    rowspan </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">let</span><span class="pln"> </span><span class="pun">{</span><span class="pln">table</span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">refs</span><span class="pun">;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">let</span><span class="pln"> columns </span><span class="pun">=</span><span class="pln"> table</span><span class="pun">.</span><span class="pln">getColumns</span><span class="pun">();</span></code></li><li class="L4"><code><span class="pln">        columns</span><span class="pun">[</span><span class="lit">1</span><span class="pun">].</span><span class="pln">props </span><span class="pun">=</span><span class="pln"> props</span><span class="pun">;</span></code></li><li class="L5"><code><span class="pln">        table</span><span class="pun">.</span><span class="pln">setColumns</span><span class="pun">(</span><span class="pln">columns</span><span class="pun">)</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">    colSpan </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;{</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">let</span><span class="pln"> </span><span class="pun">{</span><span class="pln">table</span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">refs</span><span class="pun">;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">let</span><span class="pln"> columns </span><span class="pun">=</span><span class="pln"> table</span><span class="pun">.</span><span class="pln">getColumns</span><span class="pun">();</span></code></li><li class="L0"><code><span class="pln">        columns</span><span class="pun">[</span><span class="lit">3</span><span class="pun">].</span><span class="pln">props </span><span class="pun">=</span><span class="pln"> colSpanf</span><span class="pun">;</span></code></li><li class="L1"><code><span class="pln">        columns</span><span class="pun">[</span><span class="lit">4</span><span class="pun">].</span><span class="pln">props </span><span class="pun">=</span><span class="pln"> colSpanf</span><span class="pun">;</span></code></li><li class="L2"><code><span class="pln">        table</span><span class="pun">.</span><span class="pln">setColumns</span><span class="pun">(</span><span class="pln">columns</span><span class="pun">)</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L4"><code><span class="pln">    hidden </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;{</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">let</span><span class="pln"> </span><span class="pun">{</span><span class="pln">table</span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">refs</span><span class="pun">;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">let</span><span class="pln"> columns </span><span class="pun">=</span><span class="pln"> table</span><span class="pun">.</span><span class="pln">getColumns</span><span class="pun">();</span></code></li><li class="L7"><code><span class="pln">        columns</span><span class="pun">[</span><span class="lit">2</span><span class="pun">].</span><span class="pln">show </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span></code></li><li class="L8"><code><span class="pln">        table</span><span class="pun">.</span><span class="pln">setColumns</span><span class="pun">(</span><span class="pln">columns</span><span class="pun">)</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">    show </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">let</span><span class="pln"> </span><span class="pun">{</span><span class="pln">table</span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">refs</span><span class="pun">;</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">let</span><span class="pln"> columns </span><span class="pun">=</span><span class="pln"> table</span><span class="pun">.</span><span class="pln">getColumns</span><span class="pun">();</span></code></li><li class="L3"><code><span class="pln">        columns</span><span class="pun">[</span><span class="lit">2</span><span class="pun">].</span><span class="pln">show </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span></code></li><li class="L4"><code><span class="pln">        table</span><span class="pun">.</span><span class="pln">setColumns</span><span class="pun">(</span><span class="pln">columns</span><span class="pun">)</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L8"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="str">&lt;div&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setFixed</span><span class="pun">}&gt;设置第一列固定&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Divider</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"vertical"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">rowspan</span><span class="pun">}&gt;设置合并行&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Divider</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"vertical"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">colSpan</span><span class="pun">}&gt;设置合并列&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Divider</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"vertical"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">hidden</span><span class="pun">}&gt;隐藏第二列&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Divider</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"vertical"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">show</span><span class="pun">}&gt;显示第二列&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">EntryTable</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="kwd">ref</span><span class="pun">=</span><span class="str">"table"</span></code></li><li class="L2"><code><span class="pln">                    bordered</span></code></li><li class="L3"><code><span class="pln">                    scroll</span><span class="pun">={{</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">300</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L4"><code><span class="pln">                    dataSource</span><span class="pun">={</span><span class="pln">dataSource</span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">                    columns</span><span class="pun">={</span><span class="pln">columns</span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">                    cellOnChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">cellOnChange</span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">                    rowKey</span><span class="pun">=</span><span class="str">"id"</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&gt;&lt;/</span><span class="typ">EntryTable</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pun">}</span></code></li><li class="L3"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>
`;

export default {
	code,
}