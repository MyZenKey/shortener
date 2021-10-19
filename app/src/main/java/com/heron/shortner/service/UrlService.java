package com.heron.shortner.service;

import org.springframework.stereotype.Service;

import com.heron.shortner.model.Url;
import com.heron.shortner.model.UrlDto;

@Service
public interface UrlService
{
    public Url generateShortLink(UrlDto urlDto);
    public Url persistShortLink(Url url);
    public Url getEncodedUrl(String url);
    public  void  deleteShortLink(Url url);
}
