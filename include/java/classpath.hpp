//
//  classpath.hpp
//  LibJNI
//
//  Created by Cesar Valdez on 20/04/2016.
//  Copyright © 2016 Cesar Valdez. All rights reserved.
//

#ifndef classpath_hpp
#define classpath_hpp

#include <iostream>
#include <dirent.h>
#include <algorithm>

#include "jvm_global.hpp"


class ClassPath {

    
public:
    static std::string LocateLibraries(std::vector<std::string> directories, bool recusive);
    
private:
    std::string classPath;
};



#endif /* classpath_hpp */
