//
//  SecondViewController.swift
//  iosApp
//
//  Created by Artem Dudinskyi on 2/27/20.
//  Copyright © 2020 Wix. All rights reserved.
//

import UIKit
import React

class SecondViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")!

        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "CocoaHeads",
            initialProperties: nil,
            launchOptions: nil
        )
        rootView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(rootView)

        rootView.topAnchor.constraint(equalTo: view.topAnchor).isActive = true
        rootView.bottomAnchor.constraint(equalTo: view.bottomAnchor).isActive = true
        rootView.leadingAnchor.constraint(equalTo: view.leadingAnchor).isActive = true
        rootView.trailingAnchor.constraint(equalTo: view.trailingAnchor).isActive = true
    }
}
