/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//const AFRAME = require('aframe');
//var scene1 = document.querySelector('a-scene');
//console.log(scene1.querySelector('#reBox'));
//console.log(scene1.querySelectorAll('a-box'));

AFRAME.registerPrimitive('a-ocean',{
    
    defaultComponents:{
        ocean: {},
        rotation: {x: -90, y: 0, z: 0}
    },
 
    mappings: {
            width: 'ocean.width',
            depth: 'ocean.depth',
            density: 'ocean.density',
            color: 'ocean.color',
            opacity: 'ocean.opacity'
        }
});
/*
AFRAME.registerComponent('query-selector-example',{
    init: function (){
        this.entities = document.querySelector('.box');
    }
    
    tick: function (){
        for(let i = 0; i < this.entities.length; i++ ){
            
        }
    }
});
*/