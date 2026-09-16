var objc = JSON.parse($response.body);

objc = {
  "links": {
    "self": "http://www.veed.io/v1/user/" + objc.data.id + "/mobile"
  },
  "data": {
    "status": "verified",
    "thumbnail": objc.data.thumbnail,
    "thumbnailAssetId": objc.data.thumbnailAssetId,
    "id": objc.data.id,
    "mobileId": objc.data.mobileId,
    "trainingDataConsent": true,
    "email": objc.data.email,
    "createdAt": objc.data.createdAt,
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
        "priority_support"
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
};

$done({ body: JSON.stringify(objc) });
