//
//  FirstViewController.swift
//  iosApp
//
//  Created by Artem Dudinskyi on 2/27/20.
//  Copyright © 2020 Wix. All rights reserved.
//

import UIKit

class FirstViewController: UIViewController {

    @IBOutlet weak var logoImageView: UIImageView!
    @IBOutlet weak var firstViewTitle: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        guard let appDelegate = UIApplication.shared.delegate as? AppDelegate else {
            return
        }
        
        firstViewTitle.font = UIFont.systemFont(ofSize: appDelegate.settingsManager.fontSize)
        
        if (appDelegate.settingsManager.darkMode) {
            overrideUserInterfaceStyle = .dark
        } else {
            overrideUserInterfaceStyle = .light
        }
    }
}

