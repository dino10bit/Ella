//
//  jvm_global.h
//  LibJNI
//
//  Created by Cesar Valdez on 03/02/2016.
//  Copyright © 2016 Cesar Valdez. All rights reserved.
//

#ifndef jvm_global_h
#define jvm_global_h

#ifdef _WIN32
	#include <memory>
#else
	#include <dirent.h>
	#include <unistd.h>
#endif

#ifdef __APPLE__
    #include <JavaVM/jni.h>
#else
    #include <jni.h>
#endif

#ifdef __linux__
  #include <memory>
  #include <dlfcn.h>
  #include <string>
#endif

#include <iostream>
#include <sstream>
#include <vector>
#include <map>
#include <assert.h>

struct VMError {
    std::string errorMessage;
};


using JEnv  = const std::shared_ptr<JNIEnv>;


const std::string JAVA_METHOD_CLASS("java/lang/reflect/Method");
const std::string JAVA_STRING_CLASS("java/lang/String");
const std::string CLASS_DEFAULT_CTS("<init>");
const std::string VOID_RETURN("()V");

struct Method {
    jmethodID method = nullptr;
    std::string returnType;
    std::vector<std::string> parameters;
};



#endif /* jvm_global_h */
