//
//  SettingsManager.swift
//  iosApp
//
//  Created by Artem Dudinskyi on 3/3/20.
//  Copyright © 2020 Wix. All rights reserved.
//

import UIKit

class SettingsManager: NSObject {

    var fontSize: CGFloat = 17
    var darkMode: Bool = false
    
    @objc
    func setSettings(_ settingsDictionary: [String: Any]) {
        fontSize = (settingsDictionary["font_size"] as? CGFloat) ?? 17
        darkMode = (settingsDictionary["dark_mode"] as? Bool) ?? false
    }

}
