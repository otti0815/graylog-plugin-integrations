/**
 * This file is part of Graylog.
 *
 * Graylog is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Graylog is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Graylog.  If not, see <http://www.gnu.org/licenses/>.
 */
package org.graylog.integrations.pagerduty.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.URL;

/**
 * @author Edgar Molina
 *
 */
public class Link {
    @JsonProperty("href")
    private final URL href;
    @JsonProperty("text")
    private final String text;

    public Link(URL href, String text) {
        this.href = href;
        this.text = text;
    }

    public URL getHref() {
        return href;
    }

    public String getText() {
        return text;
    }
}