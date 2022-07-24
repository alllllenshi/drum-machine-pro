import React,{useEffect} from 'react'
import $ from 'jquery'


const Slider = props => {

  useEffect(()=>{
    $(function() {
      var rangePercent = $('#range1').val();
      $('#range1').on('change input', function() {
        rangePercent = $('#range1').val();
        $('#range1').css('filter', 'hue-rotate(-' + rangePercent + 'deg)');
      });
    });
    $(function() {
        var rangePercent = $('#range2').val();
        $('#range2').on('change input', function() {
          rangePercent = $('#range2').val();
          $('#range2').css('filter', 'hue-rotate(-' + rangePercent + 'deg)');
        });
      });
  },[])

  return (
    <div style={{marginRight:"2vw"}}>
        <div className="sliderLabel">{props.label}</div>
        <input type="range" id={`range${props.id}`} min="1" max="100"/>
    </div>
  )
}


export default Slider