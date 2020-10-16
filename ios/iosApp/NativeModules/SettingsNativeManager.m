//
//  SettingsNativeManager.m
//  iosApp
//
//  Created by Artem Dudinskyi on 3/3/20.
//  Copyright © 2020 Wix. All rights reserved.
//

#import "SettingsNativeManager.h"
#import "iosApp-Swift.h"

@implementation SettingsNativeManager

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(setSettings:(NSDictionary * _Nonnull)settings)
{
    AppDelegate *appDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    SettingsManager *settingsManager =  [appDelegate settingsManager];
    [settingsManager setSettings:settings];
}

@end
