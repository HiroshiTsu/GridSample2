/*
 * File: app/view/Reddit.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GridSample2.view.Reddit', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.reddit',

    requires: [
        'GridSample2.view.RedditViewModel',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.View',
        'Ext.grid.feature.Summary'
    ],

    viewModel: {
        type: 'mainviewport'
    },

    items: [
        {
            xtype: 'gridpanel',
            autoScroll: true,
            frame: true,
            height: 194,
            bodyBorder: true,
            simpleDrag: true,
            title: '営業所毎売上高',
            columnLines: true,
            store: 'Sales',
            columns: [
                {
                    xtype: 'gridcolumn',
                    summaryRenderer: function(val, params, data) {
                        return Ext.String.format('計');
                    },
                    dataIndex: 'branch',
                    text: '営業所'
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        return Ext.util.Format.number(val,'0,000');
                    },
                    summaryType: 'sum',
                    align: 'right',
                    dataIndex: 'yx1',
                    groupable: false,
                    text: 'H×１年',
                    format: '0,000'
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        return Ext.util.Format.number(val,'0,000');
                    },
                    summaryType: 'sum',
                    align: 'right',
                    dataIndex: 'yx2',
                    text: 'H×２年',
                    format: '0,000'
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        return Ext.util.Format.number(val,'0,000');
                    },
                    summaryType: 'sum',
                    align: 'right',
                    dataIndex: 'yx3',
                    text: 'H×３年',
                    format: '0,000'
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        return Ext.util.Format.number(val,'0,000');
                    },
                    summaryType: 'sum',
                    align: 'right',
                    dataIndex: 'yx4',
                    text: 'H×４年',
                    format: '0,000'
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        return Ext.util.Format.number(val,'0,000');
                    },
                    summaryType: 'sum',
                    align: 'right',
                    dataIndex: 'yx5',
                    text: 'H×５年',
                    format: '0,000'
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        return Ext.util.Format.number(val,'0,000');
                    },
                    summaryType: 'sum',
                    align: 'right',
                    dataIndex: 'yx6',
                    text: 'H×６年',
                    format: '0,000'
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        return Ext.util.Format.number(val,'0,000');
                    },
                    summaryType: 'sum',
                    align: 'right',
                    dataIndex: 'yx7',
                    text: 'H×７年',
                    format: '0,000'
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        return Ext.util.Format.number(val,'0,000');
                    },
                    summaryType: 'sum',
                    align: 'right',
                    dataIndex: 'yx8',
                    text: 'H×８年',
                    format: '0,000'
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        return Ext.util.Format.number(val,'0,000');
                    },
                    summaryType: 'sum',
                    align: 'right',
                    dataIndex: 'yx9',
                    text: 'H×９年',
                    format: '0,000'
                }
            ],
            viewConfig: {
                enableTextSelection: true
            },
            features: [
                {
                    ftype: 'summary',
                    dock: 'bottom'
                }
            ]
        }
    ]

});