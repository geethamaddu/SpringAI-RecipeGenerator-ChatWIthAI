package com.ai.SpringAiDemo;

import org.springframework.ai.image.ImageModel;
import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    private final ImageModel imageModel;

    public ImageService(ImageModel imageModel) {
        this.imageModel = imageModel;
    }
    public ImageResponse generate(String prompt){
       return imageModel.call(
                new ImagePrompt(prompt)
        );
    }
}
