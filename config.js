import firebase from 'firebase-app-compat';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
const firebaseConfig={


    
        "project_info": {
          "project_number": "685851948055",
          "project_id": "zuppa-439fc",
          "storage_bucket": "zuppa-439fc.appspot.com"
        },
        "client": [
          {
            "client_info": {
              "mobilesdk_app_id": "1:685851948055:android:1f4dda8ab246771559d852",
              "android_client_info": {
                "package_name": "com.zuppa.zuppagcs2"
              }
            },
            "oauth_client": [
              {
                "client_id": "685851948055-a182jvvhr0gukilm7anmiu4860j44dtp.apps.googleusercontent.com",
                "client_type": 3
              }
            ],
            "api_key": [
              {
                "current_key": "AIzaSyAag6CIlwPRdH-D-yj1zfBB6eGeVDCzW3A"
              }
            ],
            "services": {
              "appinvite_service": {
                "other_platform_oauth_client": [
                  {
                    "client_id": "685851948055-a182jvvhr0gukilm7anmiu4860j44dtp.apps.googleusercontent.com",
                    "client_type": 3
                  }
                ]
              }
            }
          }
        ],
        "configuration_version": "1"
      }

      if(!firebase.apps.length)
      {
           firebase.initializeApp(firebaseConfig);
      }

      export{firebase};