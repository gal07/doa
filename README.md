<h1>D2C Mobile</h1>

<h3>Need to install</h3> <ul> <li>Angular CLI: 8.3.25</li> <li>Angular: 8.2.14</li> <li>Node: 12.16.1</li> <li>Ionic 5+</li> <li>Corodva 9.0.0</li> </ul>

<br><br>

<h3>How To run</h3> <ul> <li>npm install</li> <li>Ionic serve</li> </ul>

<br><br>

<h3>Possibly Error</h3> <p>Executing script found in plugin cordova-play-services-version-adapter for hook "before_prepare": plugins\cordova-play-services-version-adapter\scripts\adapt-play-services- versions.js Using "requireCordovaModule" to load non-cordova module "q" is not supported. Instead, add this module to your dependencies and use regular "require" to load it. CordovaError: Using "requireCordovaModule" to load non-cordova module "q" is not supported. Instead, add this module to your dependencies and use regular "require" to load it.</p> <br> <p>Solve : </p> <ul> <li>ionic cordova plugin remove cordova-play-services-version-adapter --force</li> <li>ionic cordova plugin add https://github.com/appfeel/cordova-play-services-version-adapter</li&gt; </ul>

<br><br>

<p>Dependency failing: com.google.firebase:firebase-messaging:19.0.1 -> com.google.firebase:firebase-iid@[19.0.1], but fire base-iid version was 20.0.2.

The following dependencies are project dependencies that are direct or have transitive dependencies that lead to the art ifact with the issue. – Project ‘app’ depends onto com.google.firebase:firebase-messaging@19.+ – Project ‘app’ depends onto com.google.android.gms:play-services-measurement-api@17.2.2 – Project ‘app’ depends onto com.google.android.gms:play-services-tagmanager@16.0.8 – Project ‘app’ depends onto com.google.firebase:firebase-perf@18.+ – Project ‘app’ depends onto com.google.firebase:firebase-iid@20.0.2 – Project ‘app’ depends onto com.google.firebase:firebase-core@17.+ – Project ‘app’ depends onto com.google.android.gms:play-services-tagmanager@16.+ – Project ‘app’ depends onto com.google.firebase:firebase-config@18.0.0 – Project ‘app’ depends onto com.google.firebase:firebase-config@18.+ – Project ‘app’ depends onto com.google.android.gms:play-services-tagmanager-api@16.0.8 – Project ‘app’ depends onto com.google.firebase:firebase-core@17.2.2 – Project ‘app’ depends onto com.google.firebase:firebase-analytics@17.2.2 – Project ‘app’ depends onto com.google.firebase:firebase-perf@18.0.1 – Project ‘app’ depends onto com.google.firebase:firebase-messaging@19.0.1</p> <br>

<p>Solve : </p> <ul> <li>You can force firebase to use the correct version of firebase-messaging by changing the following in platforms\android\project.properties, platforms\android\app\build.gradle and plugins\cordova-plugin-firebase-lib\plugin.xml files: </li> <li>- com.google.firebase:firebase-messaging:19.+</li> <li>+ com.google.firebase:firebase-messaging:20.+</li> </ul>
