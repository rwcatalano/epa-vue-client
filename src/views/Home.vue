<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-10">
        <div class="home">
          <img alt="Vue logo" src="../assets/logo.png">
          <h1>Welcome to Robert W. Catalano's Code Sample</h1>

          <h3>This small app is orgainzed into two main parts: client and server.</h3>

          <p>The client consists of 4 views that implement components to do the heavy lifting.</p>
          <p>The client makes calls to the api located in the server using named parameters in the url.</p>

          <ol>
            <li>Area - Calcuates the area of a triangle using the formula: 1.5 (base * height)</li>
            <li>Hypotenuse - Calculates the longest edge of a triangle using the pathagorean theorem</li>
            <li>Seconds - Calculates the seconds with multiple calls of a function that multiples a value by 60</li>
            <li>Recursion - Recursively calls itself based on the iteration count specified.</li>
          </ol>

          <h2>Testing</h2>
          <p>The api can be tested by navigating your bash to the server folder then executing > pytest</p>
          <p>This will run 8 tests aginst the module EPACode.py</p>

          <ol>
            <li>test_triangle_area():</li>
            <li>test_triangle_area_float():</li>
            <li>test_triangle_area_negative():</li>
            <li>test_triangle_hypotenuse():</li>
            <li>test_triangle_hypotenuse_float():</li>
            <li>test_triangle_hypotenuse_negative():</li>
            <li>test_time_seconds():</li>
            <li>test_time_seconds_nagative():</li>
            <li>test_recursive_string():</li>
          </ol>

          <h2>API Endpoints</h2>
          <p>All of the endpoints used in this project are GET</p>
          <p>Start the server using this command: /EPA/server> python app.py</p>

          <ol>
            <li>http://127.0.0.1:5000/triangle/area/height/[height]/base/[base]</li>
            <li>http://127.0.0.1:5000/triangle/hypotenuse/height/[height]/base/[base]</li>
            <li>http://127.0.0.1:5000/time/seconds/hours/[hours]/minutes/[minutes]</li>
            <li>http://127.0.0.1:5000/recursion/label/[label]/count/[count]</li>
          </ol>
          <br/>
        </div>
      </div>
    </div>
  </div>
</template>
