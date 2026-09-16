var objc = JSON.parse($response.body);

objc = {
  "links": {
    "self": "http://www.veed.io/v1/user/5A91171A-4A33-47B8-BFBD-3C699921D4FC/mobile"
  },
  "data": {
    "status": "verified",
    "thumbnail": null,
    "thumbnailAssetId": null,
    "id": "5a91171a-4a33-47b8-bfbd-3c699921d4fc",
    "mobileId": "$VEEDMobileID:76e867db-53de-4483-b419-31b334c0825f",
    "trainingDataConsent": true,
    "email": "explicit7x@icloud.com",
    "createdAt": "2026-08-19T10:34:53.896Z",
    "onboarded": true,
    "name": "VEED Premium User",
    "subscription": {
      "status": "active",
      "plan": "premium",
      "type": "yearly",
      "autoRenewing": true,
      "expiryDate": "2099-12-31T23:59:59.999Z",
      "features": [
        "unlimited_exports",
        "hd_quality",
        "no_watermark",
        "premium_templates",
        "advanced_editing",
        "cloud_storage",
        "priority_support",
        "all_premium_features"
      ],
      "productId": "veed.premium.yearly",
      "orderId": "VEED_PREMIUM_2026",
      "valid": true
    },
    "isPremium": true,
    "premiumExpiry": 4102444799000,
    "credits": 999999,
    "storageLimit": "unlimited"
  }
}

$done({ body: JSON.stringify(objc) });
