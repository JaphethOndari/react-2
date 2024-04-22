import React from 'react'

function Tbl() {
  return (
    <div class='border-spacing-3 table'>
        <table class="table-row border-black">
            <tr >
            <th >REGISTRATION</th>
            <th>DRIVER</th>
            <th>MILAGE</th>
            <th>AGE</th>
            <th>D.O.M</th>
            </tr>
            <tr>
                <td>KDH 137N</td>
                <td>Kasee Jungo</td>
                <td>30,845</td>
                <td>2Years</td>
                <td>2017</td>
            </tr>
            <tr>
                <td>Kdn 230W</td>
                <td>Joshua Kibera</td>
                <td>30,450</td>
                <td>2Years</td>
                <td>2014</td>
            </tr>
            <tr>
                <td>KCL 130W</td>
                <td>David Mulwa</td>
                <td>30,345</td>
                <td>2Years</td>
                <td>2014</td>
            </tr>
        </table>
    </div>
  )
}

export default Tbl